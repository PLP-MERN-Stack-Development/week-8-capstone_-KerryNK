const express = require('express');
const {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
  getStats
} = require('../controllers/fitnessController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.use(protect);

router.get('/', getEntries);
router.post('/', createEntry);
router.put('/:id', updateEntry);
router.delete('/:id', deleteEntry);
router.get('/stats', getStats);

module.exports = router; 