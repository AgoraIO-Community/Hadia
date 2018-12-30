'use strict';

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  created_at: { type: Date },
  updated_at: { type: Date },
  call_page_origin: { type: String },
  page: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }]
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = (userData, callback) => {
  userData.save(callback);
};

module.exports.getUser = (UserId, callback) => {
  User.findById(UserId, callback);
};
module.exports.updateUser = (userId, update, callback) => {
  User.findByIdAndUpdate(userId, update, callback);
};
