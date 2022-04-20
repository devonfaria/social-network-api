const Thought = require('../models/Thought');

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: 'No thought found' })
        } else {
          res.json(thought)
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((newThoughtData) => res.json(newThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $set:
        {
          thoughtText: req.body.thoughtText,
          username: req.body.username,
          reactions: req.body.reactions
        }
      },
      { runValidators: true, new: true })
      .select('-__v')
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: 'No thought to update' })
        } else {
          res.json(thought)
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: 'No thought to delete' })
        } else {
          res.json(`Deleted thought ${thought.thoughtText}`)
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: { reactionBody: req.body.reactionBody, username: req.body.username } } },
      { runValidators: true, new: true })
      .select('-__v')
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: 'No thought with that ID' })
        } else {
          res.json(thought)
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true })
      .select('-__v')
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: 'No thought to update' })
        } else {
          res.json(thought)
        }
      })
      .catch((err) => res.status(500).json(err));
  },
};
