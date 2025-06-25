const User = require('../models/User');

// Update timetable for logged in user
const updateTimetable = async (req, res) => {
  try {
    const userId = req.user._id;
    const timetable = req.body.timetable;

    if (!Array.isArray(timetable)) {
      return res.status(400).json({ message: 'Timetable must be an array' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.timetable = timetable;
    await user.save();

    res.json({ message: 'Timetable updated successfully', timetable: user.timetable });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get timetable for logged in user
const getTimetable = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user.timetable);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { updateTimetable, getTimetable };
