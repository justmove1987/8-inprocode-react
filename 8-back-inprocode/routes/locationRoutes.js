const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

// GET all
router.get('/', async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
});

// POST new
router.post('/', async (req, res) => {
  const location = new Location(req.body);
  const saved = await location.save();
  res.status(201).json(saved);
});

module.exports = router;
