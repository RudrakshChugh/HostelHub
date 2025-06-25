const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');

const attendanceRoutes = require('./routes/attendanceRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
connectDB();  // ✅ Only call once

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('HOSTELhub+ backend is running ✅');
});

app.use('/api/auth', authRoutes);
app.use('/api/attendance', attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});