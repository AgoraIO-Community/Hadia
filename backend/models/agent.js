'use strict';

const mongoose = require('mongoose');

const agentSchema = mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  phone_number: { type: String },
  email: { type: String },
  profile_pic: { type: String },
  channel_name: { type: String },
  admin: { type: Boolean },
  available: { type: String },
  online: { type: String },
  created_at: { type: Date },
  updated_at: { type: Date },
  page: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }],
  password: { type: String },
  token_expiry: { type: Date },
  token: { type: String }
});

const Agent = module.exports = mongoose.model('Agent', agentSchema);

module.exports.createAgent = (agentData, callback) => {
  agentData.save(callback);
};

module.exports.getAgent = (agentId, callback) => {
  Agent.findById(agentId).populate({
    path: 'page',
    options: {
      select: {
        name: 1,
        domain: 1,
        welcome_message: 1,
        thankyou_message: 1,
        created_at: 1,
      }
    }
  }).exec(callback); ;
};

module.exports.updateAgent = (agentId, update, callback) => {
  Agent.findByIdAndUpdate(agentId, update).populate({
    path: 'page',
    options: {
      select: {
        name: 1,
        domain: 1,
        welcome_message: 1,
        thankyou_message: 1,
        created_at: 1,
      }
    }
  }).exec(callback); ;
};
module.exports.findAllAgents = (pageId, callback) => {
  Agent.find({ 'page': pageId }, callback);
};
module.exports.getAgentByEmail = (email, callback) => {
  Agent.findOne({ email: email }).populate({
    path: 'page',
    options: {
      select: {
        name: 1,
        domain: 1,
        welcome_message: 1,
        thankyou_message: 1,
        created_at: 1,
      }
    }
  }).exec(callback);
};
