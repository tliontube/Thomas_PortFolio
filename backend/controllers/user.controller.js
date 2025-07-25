import auth from '../middlewares/auth.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const getUsers = async (req, res) => {
  const users = await User.find();
  if (!users) {
    return res.status(404).json({ message: "No user Found" });
  }
  res.status(200).json(users);
};

export const addNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All feilds are required" })
  }
  try {
    const user = await User.create({
      name,
      email,
      password
    })
    res.status(201).json(user);

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const userSignIn = async (req, response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return response.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return response.status(401).json({ message: "Invalid Credentails" })
    }
    return response.status(200).json({
      message: "Login Successfull",
      user: user,
      token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    })
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
}