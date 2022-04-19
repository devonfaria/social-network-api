const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: { type: Types.ObjectId, default: new Types.ObjectId() },
  reactionBody: { type: String, required: true, minLength: 1, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: new Date() }
});

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  createdAt: { type: Date, default: new Date() },
  username: { type: String, required: true },
  reactions: [reactionSchema]
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;