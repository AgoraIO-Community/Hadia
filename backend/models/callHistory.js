'use strict';

const mongoose = require('mongoose');

const callHistorySchema = mongoose.Schema({
  started_at: { type: Date },
  ended_at: { type: Date },
  agent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }],
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  page: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }]
});

const callHistory = module.exports = mongoose.model('callHistory', callHistorySchema);

module.exports.addcallHistroy = (historyData, callback) => {
  historyData.save(callback);
};


module.exports.getHistoryByAgentId = (agentId, callback) => {
  callHistory.find({ agent:agentId }, callback);
};

module.exports.getHistoryByUserId = (userId, callback) => {
  callHistory.findById({ user: userId }, callback);
};
