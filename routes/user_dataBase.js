const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/persondb');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);


// Create a new user
async function createUser(userData) {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (err) {
    throw new Error('Error creating user');
  }
}

// Read all users
async function getAllUsers() {
  try {
    return await User.find();
  } catch (err) {
    throw new Error('Error fetching users');
  }
}

// Read a user by ID
async function getUserById(userId) {
  try {
    return await User.findById(userId);
  } catch (err) {
    throw new Error('Error fetching user by ID');
  }
}

// Update a user by ID
async function updateUser(userId, updateData) {
  try {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  } catch (err) {
    throw new Error('Error updating user');
  }
}

// Delete a user by ID
async function deleteUser(userId) {
  try {
    return await User.findByIdAndRemove(userId);
  } catch (err) {
    throw new Error('Error deleting user');
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
