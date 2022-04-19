const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// Get ALL Thoughts
router.route('/').get(getAllThoughts);

// Get Single Thought
router.route('/:thoughtId').get(getSingleThought);

// Create Thought
router.route('/').post(createThought);

// Update Thought
router.route('/:thoughtId').put(updateThought);

// Delete Thought
router.route('/:thoughtId').delete(deleteThought);

// Add reaction
router.route('/:thoughtId/reactions').put(addReaction);

// Delete reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;