const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: { type: String, default: new mongoose.Types.ObjectId() },
  reactionBody: { type: String, required: true, minLength: 1, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: new Date() }
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;

