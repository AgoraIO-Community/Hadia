/**
 * Endpoints for receiving RESTful GET, POST, etc requests for page operations
 */

'use strict';

const express = require('express');
const router = express.Router();

const Page = require('../models/page');

/**
 *  Receive request to add a new page
 */
router.post('/', (req, res, next) => {
  // Prevent empty values and ensure required properties are included
  if (!req.body.page_name) {
    console.log(`Request to create new page missing params`);
    return res.status(400).json({
      success: false,
      msg: 'Missing  page_name'
    });
  }

  // Add date page was created
  req.body.created_at = Date.now();

  // Create new page
  Page.createPage(new Page(req.body), (err, page) => {
    if (err) {
      console.log(`Error creating new page: `, err);
      return res.status(500).json({
        success: false,
        msg: 'Error creating  new page'
      });
    }

    console.log(`Successfully created page ${page._id}`);
    res.status(201).json({
      success: true,
      msg: 'Successfully created new page',
      page: page
    });
  });
});

/**
 * GET a specific page data
 */
router.get('/:id', (req, res, next) => {
  Page.getPage(req.params.id, (err, page) => {
    if (err) {
      console.log(`Error obtaining page ${req.params.id} data`);
      return res.status(500).json({
        success: false,
        msg: 'Error obtaining page data'
      });
    }

    if (!err && !page) {
      console.log(`Page ${req.params.id} not found!`);
      return res.status(404).json({
        success: false,
        msg: 'Page not found'
      });
    }

    console.log(`Successfully obtained page ${req.params.id} data`);
    res.status(200).json({
      success: true,
      msg: 'Successfully obtained page data',
      page: page
    });
  });
});

/**
 * DELETE a specific page
 */
router.delete('/:id', (req, res, next) => {
  Page.deletePage(req.params.id, (err, page) => {
    if (err) {
      console.log(`Error deleting page ${req.params.id}`, err);
      return res.status(500).json({
        success: false,
        msg: 'Error deleting page'
      });
    }

    if (!err && !page) {
      console.log(`Page ${req.params.id} to be deleted not found!`);
      return res.status(404).json({
        success: false,
        msg: 'Page to be deleted not found!'
      });
    }

    console.log(`Successfully deleted page ${req.params.id}`);
    res.status(200).json({
      success: true,
      msg: 'Successfully deleted page.',
      page: page
    });
  });
});

// Export router midlewaare
module.exports = router;
