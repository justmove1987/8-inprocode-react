const User = require('../models/User');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  const saved = await user.save();
  res.status(201).json(saved);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.sendStatus(204);
};


exports.createUser = async (req, res) => {
  console.log('Dades rebudes:', req.body) // <-- Comprovació
  const user = new User(req.body)
  const saved = await user.save()
  res.status(201).json(saved)
}