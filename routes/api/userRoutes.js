const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// Get ALL Users
router.route('/').get(getAllUsers);

// Get Single User
router.route('/:userId').get(getSingleUser);

// Create User
router.route('/').post(createUser);

// Update User
router.route('/:userId').put(updateUser);

// Delete User
router.route('/:userId').delete(deleteUser);

// Add friend
router.route('/:userId/friends/:friendId').put(addFriend);

// Add friend
router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;