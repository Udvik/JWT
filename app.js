// app.js
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());  // This line is essential for parsing JSON

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
