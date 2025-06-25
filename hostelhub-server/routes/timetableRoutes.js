const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { updateTimetable, getTimetable } = require('../controllers/timetableController');

const router = express.Router();

router.put('/update', protect, updateTimetable);
router.get('/', protect, getTimetable);

module.exports = router;
