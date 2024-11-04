// controllers/userController.js
exports.getProfile = (req, res) => {
    res.send(`Welcome, ${req.user.username}. Here is your profile.`);
  };
  