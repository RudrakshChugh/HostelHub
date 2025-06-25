const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['present', 'absent'], required: true }
});

attendanceSchema.index({ userId: 1, subject: 1, date: 1 }, { unique: true }); // prevent duplicate records

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
