const mongoose = require('mongoose');

const pluginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  version: String,
  active: { type: Boolean, default: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Plugin', pluginSchema);
