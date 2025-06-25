const Attendance = require('../models/Attendance');

// Mark attendance (present/absent)
const markAttendance = async (req, res) => {
  try {
    const userId = req.user._id;
    const { subject, date, status } = req.body;

    if (!subject || !date || !['present', 'absent'].includes(status)) {
      return res.status(400).json({ message: 'Invalid data' });
    }

    const attendanceDate = new Date(date);
    attendanceDate.setHours(0, 0, 0, 0);

    // Check if record exists for this user, subject and date
    let attendance = await Attendance.findOne({ userId, subject, date: attendanceDate });

    if (attendance) {
      attendance.status = status;
    } else {
      attendance = new Attendance({ userId, subject, date: attendanceDate, status });
    }

    await attendance.save();

    res.json({ message: 'Attendance marked', attendance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get attendance summary for dashboard
const getAttendanceSummary = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log('Getting attendance for user:', userId);

    const attendanceRecords = await Attendance.find({ userId });
    console.log('Attendance records:', attendanceRecords);

    const summary = {};

    attendanceRecords.forEach(record => {
      if (!summary[record.subject]) {
        summary[record.subject] = { present: 0, total: 0 };
      }
      if (record.status === 'present') summary[record.subject].present++;
      summary[record.subject].total++;
    });

    const safeToBunk = {};
    for (const subject in summary) {
      const { present, total } = summary[subject];
      const currentPercentage = (present / total) * 100 || 0;
      const maxMiss = Math.floor((present / 0.75) - total);
      safeToBunk[subject] = maxMiss > 0 ? maxMiss : 0;
      summary[subject].percentage = Math.round(currentPercentage);
    }

    console.log('Summary:', summary);
    console.log('SafeToBunk:', safeToBunk);

    res.json({ summary, safeToBunk });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { markAttendance, getAttendanceSummary };
