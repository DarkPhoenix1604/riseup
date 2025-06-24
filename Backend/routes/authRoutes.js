const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");  //idhar error aana chahiye

const router = express.Router();


router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({success:false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ success:true, message:"login successfully"});
  } catch (error) {
    res.status(500).json({ success:false ,message: "Server error", error });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success:false,message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({success:false, message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, { httpOnly: true });
    res.json({ success: true, token, user: { name: user.name } ,message: "Login successful"});
  } catch (error) {
    res.status(500).json({success:false, message: "Server error", error });
  }
});

// logout route
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({success:true, message: "Logged out successfully" });
});

module.exports = router;
