

const User = require('../models/user');


// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;


    const newUser = new User({
      username,
      email,
      password
    });


    const savedUser = await newUser.save();


    res.status(201).json({
      message: 'User created successfully',
      user: savedUser
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error creating user',
      error: error.message
    });
  }
};


// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');


    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching users',
      error: error.message
    });
  }
};


