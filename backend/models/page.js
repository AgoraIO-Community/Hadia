'use strict';

const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
  name: { type: String },
  domain: { type: String },
  vendor_key: { type: String },
  sign_key: { type: String },
  status: { type: String },
  welcome_message: { type: String },
  thankyou_message: { type: String },
  created_at: { type: Date },
  updated_at: { type: Date },
  agents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }]
});

const Page = module.exports = mongoose.model('Page', pageSchema);

module.exports.createPage = (pageData, callback) => {
  pageData.save(callback);
};

module.exports.getPage = (pageId, callback) => {
  Page.findById(pageId, callback);
};

module.exports.deletePage = (pageId, callback) => {
  Page.findByIdAndRemove(pageId, callback);
};
module.exports.getPageByName = (pageName, callback) => {
  Page.findOne({ name: pageName }, callback);
};
module.exports.updatePageAgents = (pageId, agentId, callback) => {
  Page.findByIdAndUpdate(pageId, { agents: agentId }, callback);
};
