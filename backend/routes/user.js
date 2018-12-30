/**
 * Endpoints for receiving RESTful POST requests for user initialization
 */

'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Page = require('../models/page');

/**
 *  Receive request to initialize a new user
 */
router.post('/initialize', (req, res, next) => {
  // Prevent empty values and ensure required property is included
  if (!req.body.page) {
    console.log(`Request to initilize new user missing params`);
    return res.status(400).json({
      success: false,
      msg: 'Missing User_id in body of request'
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

    // Add date User was created
    req.body.created_at = Date.now();
    if (!req.user) {
      // Create new User
      User.createUser(new User(req.body), (err, user) => {
        if (err) {
          console.log(`Error creating new User: `, err);
          return res.status(500).json({
            success: false,
            msg: 'Error creating  new User'
          });
        }

        console.log(`Successfully created User ${user._id}`);
        res.status(201).json({
          success: true,
          msg: 'Successfully created new User',
          user: user
        });
      });
    } else {
      User.getUser(req.body.user, (err, user) => {
        if (err) {
          console.log(`Error creating new User: `, err);
          return res.status(500).json({
            success: false,
            msg: 'Error creating  new User'
          });
        }
        if (!user) {
          return res.status(404).json({
            success: false,
            msg: 'User not found'
          });
        }

        if (user.page[0] === req.user.page) {
          res.status(201).json({
            success: true,
            msg: 'Successfully created new User',
            user: user
          });
        } else {
          res.status(401).json({
            success: true,
            msg: 'User not authorised for this page',
            user: user
          });
        }
      });
    }
  });
});

// Export router midlewaare
module.exports = router;
