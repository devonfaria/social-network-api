const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: { type: ObjectId, default: new mongoose.Types.ObjectId() },
  reactionBody: { type: String, required: true, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, value: new Date() }
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;

