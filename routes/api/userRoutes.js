const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

// Get ALL Users
router.route('/').get(getAllUsers);
// Get Single User
router.route('/:userId').get(getSingleUser);
// Create User
router.route('/').post(createUser);
// Update User
router.route('/').put(updateUser);
// Delete User
router.route('/:userId').delete(deleteUser);

module.exports = router;