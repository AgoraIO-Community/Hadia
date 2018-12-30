/**
 * Endpoints for receiving RESTful  GET requests for call initialization operations
 */

'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Page = require('../models/page');
const Agent = require('../models/agent');
const callHistory = require('../models/callHistory');

const Pusher = require('pusher');
const pusher = new Pusher({
  appId: '680396',
  key: 'a7808805b311e73d5b87',
  secret: '8b046937055a9d564ad7',
  cluster: 'us2',
  encrypted: true
});

const AgoraSignGenerator = require('../lib/AgoraSignGenerator');

/**
 *  Receive request to talk to agent
 */
router.post('/make-call', (req, res, next) => {
  // Prevent empty values and ensure required property is included
  console.log(req.body, !req.body.user, !req.body.current_page);
  if (!req.body.page || !req.body.user || !req.body.current_page) {
    console.log(`Request to talk to agent missing params`);
    return res.status(400).json({
      success: false,
      msg: 'Missing user , page or currentPage in body of request'
    });
  }

  Page.getPage(req.body.page, (err, page) => {
    if (err) {
      return res.status(500).json({
        success: false,
        msg: 'Error retrieving page data'
      });
    }
    // Check if Page id exists
    if (!page) {
      return res.status(404).json({
        success: false,
        msg: 'Page id is unknown'
      });
    }

    // Create new User
    User.getUser(req.body.user, (err, user) => {
      if (err) {
        console.log(`Error getting User: `, err);
        return res.status(500).json({
          success: false,
          msg: 'Error getting User'
        });
      }

      if (!user) {
        return res.status(404).json({
          success: false,
          msg: 'User id is unknown'
        });
      }
      User.updateUser(user._id, { call_page_origin: req.body.current_page }, (err, user) => {
        if (err) {
          console.log(`Error getting User: `, err);
          return res.status(500).json({
            success: false,
            msg: 'Error updating User'
          });
        }

        if (!user) {
          return res.status(404).json({
            success: false,
            msg: 'User id is unknown'
          });
        }
        Agent.findAllAgents(req.body.page, (err, agents) => {
          if (err) {
            console.log(`Error getting User: `, err);
            return res.status(500).json({
              success: false,
              msg: 'Error getting agents'
            });
          }

          if (!agents) {
            return res.status(404).json({
              success: false,
              msg: 'page id is unknown'
            });
          }
          console.log(agents, 'sdfd');
          if (agents.filter(agent => agent.available === 'yes' && agent.online === 'yes').length === 0) {
            return res.status(401).json({
              success: false,
              msg: 'No agents available at the moment'
            });
          }

          pusher.trigger(`customerService-${page._id}`, 'incoming-call', user);

          res.status(201).json({
            success: true,
            msg: 'Successfully initiated call',
            user: user
          });
        });
      });
    });
  });
});

/**
 *  Receive request to answer user
 */
router.post('/answer-call', (req, res, next) => {
  // Prevent empty values and ensure required properties are included
  if (!req.body.page || !req.body.user || !req.body.agent) {
    console.log(`Request to answer call missing some params`);
    return res.status(400).json({
      success: false,
      msg: 'Missing one or more of page,user,agent params'
    });
  }

  // Confirm that page already exists
  Page.getPage(req.body.page, (err, page) => {
    if (err) {
      console.log(`Error obtaining page ${req.body.page} data during agent creation`);
      return res.status(500).json({
        success: false,
        msg: 'Error creating agent.'
      });
    }

    if (!err && !page) {
      console.log(`Page ${req.body.page} not found during agent creation!`);

      return res.status(404).json({
        success: false,
        msg: 'Error creating agent. Page was not found!'
      });
    }

    Agent.getAgent(req.body.agent, (err, agent) => {
      if (err) {
        console.log(`Error obtaining agent ${req.body.agent} `);
        return res.status(500).json({
          success: false,
          msg: 'Error obtaining agent'
        });
      }

      if (!err && !agent) {
        console.log(`Agent ${req.body.agent} not found !`);
        return res.status(404).json({
          success: false,
          msg: 'Error Agent was not found!'
        });
      }
      agent.user = req.body.user;
      pusher.trigger(`customerService-${page._id}`, `picked-call`, agent);
      Agent.updateAgent(agent._id, { available: false }, (err, agent) => {
        if (err) {
          console.log(`Error updating agent ${req.body.agent} `);
          return res.status(500).json({
            success: false,
            msg: 'Error updating agent'
          });
        }

        if (!err && !agent) {
          console.log(`Agent ${req.body.agent} not found !`);
          return res.status(404).json({
            success: false,
            msg: 'Error Agent was not found!'
          });
        }
        return generateDynamicKey(agent.channel_name, agent._id, req.body.user, page._id, res);
      });
    });
  });
});

/**
 *  GET agent call history
 */
router.get('/agent-history', (req, res, next) => {
  // Prevent empty values and ensure required properties are included
  if (!req.body.agent || !req.body.page) {
    console.log(`Request to answer call missing some params`);
    return res.status(400).json({
      success: false,
      msg: 'Missing one or more of page,agent params'
    });
  }

  callHistory.getHistoryByAgentId(req.body.agent._id, (err, historyArray) => {
    if (err) {
      console.log(`Error obtaining history ${req.body.agent} `);
      return res.status(500).json({
        success: false,
        msg: 'Error obtaining call history'
      });
    }

    if (!err && !historyArray) {
      console.log(`Agent ${req.body.agent} call history not found !`);
      return res.status(404).json({
        success: false,
        msg: 'Error Agent call history was not found!'
      });
    }
    res.status(201).json({
      success: true,
      msg: 'Successfully created new agent.',
      history: historyArray
    });
  });
});

/**
 *  Receive request to add call to history db
 */
router.post('/call-history', (req, res, next) => {
  // Prevent empty values and ensure required properties are included
  if (!req.body.agent || !req.body.page || !req.body.user || !req.body.started_at || !req.body.ended_at) {
    console.log(`Request to answer call missing some params`);
    return res.status(400).json({
      success: false,
      msg: 'Missing one or more of page,user,agent,started_at,ended_at params'
    });
  }

  callHistory.addcallHistroy(req.body, (err, history) => {
    if (err) {
      console.log(`Error adding history ${req.body.agent} `);
      return res.status(500).json({
        success: false,
        msg: 'Error adding  call history'
      });
    }
    res.status(201).json({
      success: true,
      msg: 'Successfully created new agent.',
      history: history
    });
  });
});

function generateDynamicKey (channelName, agentUid, userUid, page, res) {
  if (!channelName || !agentUid || !userUid || !page || !res) {
    return console.log('missing required arguments');
  }

  const ts = Math.round(new Date().getTime() / 1000);
  const exp = Math.round(new Date().getTime() / 1000) + 900;
  const agentrnd = Math.round(Math.random() * 100000000);
  console.log(channelName, agentUid, userUid, ts, exp, agentrnd);
  const agentkey = AgoraSignGenerator.generateMediaChannelKey(process.env.AGORA_APP_ID, process.env.AGORA_APP_CERTIFICATE, channelName, ts, agentrnd, agentUid, exp);
  const userrnd = Math.round(Math.random() * 100000000);
  const userkey = AgoraSignGenerator.generateMediaChannelKey(process.env.AGORA_APP_ID, process.env.AGORA_APP_CERTIFICATE, channelName, ts, userrnd, userUid, exp);

  const userchannelCred = {
    channel_name: channelName,
    uid: userUid,
    channel_key: userkey
  };
  console.log('starting pusher');
  pusher.trigger(`customerService-${page}`, userUid, userchannelCred);

  const agentchannelCred = {
    channel_name: channelName,
    uid: agentUid,
    channel_key: agentkey
  };
  console.log('starting pusher');
  return res.status(200).json({
    success: true,
    msg: 'Successfully generated channel key, initiate call',
    channel_cred: agentchannelCred
  });
}

// Export router midlewaare
module.exports = router;
