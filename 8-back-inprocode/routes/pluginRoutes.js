const express = require('express');
const router = express.Router();
const { getAllPlugins, createPlugin } = require('../controllers/pluginController');

router.get('/', getAllPlugins);
router.post('/', createPlugin);

module.exports = router;
