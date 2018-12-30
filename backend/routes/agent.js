/**
 * Endpoints for receiving RESTful GET, POST, etc requests for agent operations
 */

'use strict';

const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const Agent = require('../models/agent');
const Page = require('../models/page');

const Pusher = require('pusher');
const pusher = new Pusher({
  appId: '680396',
  key: 'a7808805b311e73d5b87',
  secret: '8b046937055a9d564ad7',
  cluster: 'us2',
  encrypted: true
});

/**
 *  Receive request to add a new agent
 */
router.post('/signup', (req, res, next) => {
  // Prevent empty values and ensure required properties are included
  if (!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.password) {
    console.log(`Request to create new agent missing some params`);
    return res.status(400).json({
      success: false,
      msg: 'Missing one or more of first_name, last_name, email,password params'
    });
  }

  // Check f page is included in request body
  if (req.body.page) {
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

      console.log(`Successfully obtained page ${req.page} data during agent creation`);
      // check if agent with email exists
      Agent.getAgentByEmail(req.body.email, (err, agent) => {
        if (err) {
          console.log(`Error creating new agent: `, err);
          return res.status(500).json({
            success: false,
            msg: 'Error creating  new agent.'
          });
        }
        if (agent) {
          return res.status(401).json({
            success: false,
            msg: 'Agent already exists'
          });
        }
        // Create agent and add agent to existing page
        // Add date agent was created
        req.body.created_at = Date.now();

        crypto.randomBytes(10, (err, buff) => {
          if (err) {
            console.log(`Error generating random alphanumeric string`);
            return res.status(500).json({
              success: false,
              msg: 'Error creating agent.'
            });
          }
          // Set channel name to randomly generated string
          req.body.channel_name = buff.toString('hex');
          crypto.randomBytes(20, (err, buffer) => {
            if (err) {
              console.log(`Error generating random alphanumeric string`);
              return res.status(500).json({
                success: false,
                msg: 'Error creating agent.'
              });
            }
            req.body.token = buffer.toString('hex');
            req.body.token_expiry = Date.now() + 172800000;
            bcrypt.genSalt(10, (err, salt) => {
              if (err) {
                return res.status(500).json({
                  success: false,
                  msg: 'Error whilst storing user data.'
                });
              }
              bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                if (err) throw err;
                req.body.password = hashedPassword;
                Agent.createAgent(new Agent(req.body), (err, agent) => {
                  if (err) {
                    console.log(`Error creating new agent: `, err);
                    return res.status(500).json({
                      success: false,
                      msg: 'Error creating  new agent.'
                    });
                  }
                  console.log(`Successfully created agent ${agent._id}`);
                  res.status(201).json({
                    success: true,
                    msg: 'Successfully created new agent.',
                    agent: agent
                  });
                });
              });
            });
          });
        });
      });
    });
  } else if (req.body.page_name) {
    // Create new page then create agent
    Page.createPage(new Page({ name: req.body.page_name }), (err, page) => {
      if (err) {
        console.log(`Error creating new page for new agent: `, err);
        return res.status(500).json({
          success: false,
          msg: 'Error creating  new page'
        });
      }

      console.log(`Successfully created page ${page._id} for new agent`);

      req.body.page = page._id;

      crypto.randomBytes(10, (err, buff) => {
        if (err) {
          console.log(`Error generating random alphanumeric string`);
          return res.status(500).json({
            success: false,
            msg: 'Error creating agent.'
          });
        }
        // Set channel name to randomly generated string
        req.body.channel_name = buff.toString('hex');
        crypto.randomBytes(20, (err, buffer) => {
          if (err) {
            console.log(`Error generating random alphanumeric string`);
            return res.status(500).json({
              success: false,
              msg: 'Error creating agent.'
            });
          }
          req.body.token_expiry = Date.now() + 172800000;
          // Create new agent
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              return res.status(500).json({
                success: false,
                msg: 'Error storing user data.'
              });
            }
            bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
              if (err) throw err;
              req.body.password = hashedPassword;
              Agent.createAgent(new Agent(req.body), (err, agent) => {
                if (err) {
                  console.log(`Error creating new agent: `, err);
                  return res.status(500).json({
                    success: false,
                    msg: 'Error creating  new agent.'
                  });
                }
                Page.updatePageAgents(page._id, agent._id, (err, page) => {
                  if (err) {
                    console.log(`Error updating  page agents: `, err);
                    return res.status(500).json({
                      success: false,
                      msg: 'Error updating  page agents'
                    });
                  }
                  console.log(`Successfully created agent ${agent._id}`);
                  res.status(201).json({
                    success: true,
                    msg: 'Successfully created new agent.',
                    agent: agent
                  });
                });
              });
            });
          });
        });
      });
    });
  } else {
    res.status(400).json({
      success: true,
      msg: 'Missing page or page_name'
    });
  }
});

/**
 *  Receive agent request to log in
 */

router.post('/login', (req, res, next) => {
  // Prevent empty values and ensure required properties are included
  if (!req.body.email || !req.body.password) {
    console.log(`Request to create new agent missing some params`);
    return res.status(400).json({
      success: false,
      msg: 'Missing one of email or password'
    });
  }

  Agent.getAgentByEmail(req.body.email, (err, agent) => {
    if (err) {
      return res.status(500).json({
        success: false,
        msg: 'Error obtaining agent.'
      });
    }
    if (!err && !agent) {
      console.log(`Agent ${req.body.agent} not found !`);
      return res.status(404).json({
        success: false,
        msg: 'Error Agent was not found!'
      });
    }
    bcrypt.compare(req.body.password, agent.password, (err, state) => {
      if (err) throw err;
      if (!state) {
        return res.status(401).json({
          success: false,
          msg: 'Wrong Email or Password'
        });
      }
      crypto.randomBytes(20, (err, buffer) => {
        if (err) {
          console.log(`Error generating random alphanumeric string`);
          return res.status(500).json({
            success: false,
            msg: 'Error creating agent.'
          });
        }
        Agent.updateAgent(agent._id, {
          token: buffer.toString('hex'),
          token_expiry: req.body.token_expiry = Date.now() + 172800000
        }, (err, agent) => {
          if (err) {
            return res.status(500).json({
              success: false,
              msg: 'Error updating agent.'
            });
          }
          res.status(201).json({
            success: true,
            msg: 'Successfully logged in ',
            agent: agent
          });
        });
      });
    });
  });
});
router.post('/status', (req, res, next) => {
  // Prevent empty values and ensure required properties are included
  if (!req.body.agent || !req.body.available || !req.body.online || !req.body.page) {
    console.log(`Request to change agent property  missing some params`);
    return res.status(400).json({
      success: false,
      msg: 'Missing one or more of  agent, available,online,page'
    });
  }
  Agent.getAgent(req.body.agent, (err, agent) => {
    if (err) {
      return res.status(500).json({
        success: false,
        msg: 'Error obtaining agent.'
      });
    }
    if (!err && !agent ) {
      console.log(`Agent ${req.body.agent} not found !`);
      return res.status(404).json({
        success: false,
        msg: 'Error Agent was not found!'
      });
    }
    Agent.updateAgent(agent._id, {
      available: req.body.available,
      online: req.body.online
    }, (err, agent) => {
      if (err) {
        return res.status(500).json({
          success: false,
          msg: 'Error updating agent.'
        });
      }

      if (req.body.available === 'no' || req.body.online === 'no') {
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
          if (agents.filter(agent => agent.available === 'yes' && agent.online === 'yes').length === 0) {
            pusher.trigger(`customerService-${req.body.page}`, 'offline', {});
          }
        });
      }
      res.status(200).json({
        success: true,
        msg: 'Successfully updated agent ',
        agent: agent
      });
    });
  });
});

// Export router midlewaare
module.exports = router;
