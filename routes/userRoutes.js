// routes/userRoutes.js
const express = require("express");
const { getProfile } = require("../controllers/userController");
const authenticateJWT = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/profile", authenticateJWT, getProfile);

module.exports = router;
