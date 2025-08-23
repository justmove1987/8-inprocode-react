const Plugin = require('../models/Plugin');

// GET /api/plugins
const getAllPlugins = async (req, res) => {
  const plugins = await Plugin.find();
  res.json(plugins);
};

// POST /api/plugins
const createPlugin = async (req, res) => {
  const { name, description, version } = req.body;
  const newPlugin = new Plugin({ name, description, version });
  const saved = await newPlugin.save();
  res.status(201).json(saved);
};

module.exports = {
  getAllPlugins,
  createPlugin,
};
