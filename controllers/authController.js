// controllers/authController.js
const bcrypt = require("bcryptjs"); // Only needed if you're hashing passwords
const generateToken = require("../jwtService");

exports.login = (req, res) => {
  const { username, password } = req.body;
  
  // Example user; ideally, you'd look up user in database
  const user = { id: 1, username: "user", password: "password" };
  
  // In real cases, verify password with bcrypt
  if (username === user.username && password === user.password) {
    const token = generateToken(user);  // Create the JWT token
    return res.json({ token });
  } else {
    return res.status(400).send("Invalid credentials.");
  }
};
