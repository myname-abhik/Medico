const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;

  try {
    await User.create({
      name,
      email,
      password,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create user" });
  }

  return res.status(201).json({ message: "User created successfully" });
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  if (user) {
    const token = setUser(user);
    return res.json({ token });
  }
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
