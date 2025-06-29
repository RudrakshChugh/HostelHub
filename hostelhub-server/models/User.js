const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User.js
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },   // change from name to username
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});



// Method to check password correctness
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


// Before saving user, hash the password if modified
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
  