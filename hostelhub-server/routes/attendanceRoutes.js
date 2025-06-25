const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { markAttendance, getAttendanceSummary } = require('../controllers/attendanceController');

const router = express.Router();

router.post('/mark', protect, markAttendance);
router.get('/summary', protect, getAttendanceSummary);

module.exports = router;
