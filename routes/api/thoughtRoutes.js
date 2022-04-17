const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtController');

// Get ALL Thoughts
router.route('/').get(getAllThoughts);
// Get Single Thought
router.route('/:thoughtId').get(getSingleThought);
// Create Thought
router.route('/').post(createThought);
// Update Thought
router.route('/').put(updateThought);
// Delete Thought
router.route('/').delete(deleteThought);

module.exports = router;