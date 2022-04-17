const User = require('../models/User');

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
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

  },
  deleteUser(req, res) {

  }
};

