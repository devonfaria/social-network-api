const User = require('../models/User');

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('friends')
      .select('-__v')
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'No user found' })
        } else {
          res.json(user)
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((newUserData) => res.json(newUserData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true })
      .select('-__v')
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'No user to update' })
        } else {
          res.json(user)
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .select('-__v')
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'No user to delete' })
        } else {
          res.json(`Deleted ${user.username}`)
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { runValidators: true, new: true })
      .select('-__v')
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'No user to update' })
        } else {
          res.json(user)
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true })
      .select('-__v')
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'No user to update' })
        } else {
          res.json(user)
        }
      })
      .catch((err) => res.status(500).json(err));
  },
};

