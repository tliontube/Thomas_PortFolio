import User from '../models/user.model.js';

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
