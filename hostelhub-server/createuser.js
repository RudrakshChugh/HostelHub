const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');  // Adjust the path as needed

async function createUser() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    const email = 'testuser@example.com';
    const password = 'Test@1234';

    let user = await User.findOne({ email });
    if (user) {
      console.log('User already exists');
      process.exit();
    }

    user = new User({
      name: 'Test User',
      email,
      password,
    });

    await user.save();
    console.log('User created successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

createUser();
