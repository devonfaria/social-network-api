const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: { type: String, default: new mongoose.Types.ObjectId() },
  reactionBody: { type: String, required: true, minLength: 1, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: new Date() }
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  createdAt: { type: Date, default: new Date() },
  username: { type: String, required: true },
  reactions: [reactionSchema]
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;