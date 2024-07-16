const express = require("express");
const User = require("./userModel");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    res.status(200).json(newUser);
    

  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    await User.findOne({ email: email, password: password }).then((user) => {
      if (user) {
        if (user.password === password) {
          res.status(200).json("success");
        } else {
          res.status(400).json({ message: "Invalid password" });
        }
      } else {
        res.status(400).json({ message: "User not found" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
