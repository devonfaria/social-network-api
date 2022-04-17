const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, maxLength: 280 },
  createdAt: { type: Date, value: new Date() },
  username: { type: String, required: true },
  reactions: { type: Array }
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;