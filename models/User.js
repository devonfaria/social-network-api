const mongoose = require('mongoose');
require('mongoose-type-email');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: mongoose.SchemaTypes.Email, unique: true, required: true },
  thoughts: { type: Array },
  friends: { type: Array }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
