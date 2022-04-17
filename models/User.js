const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true, lowercase: true },
  thoughts: { type: Array },
  friends: { type: Array }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
