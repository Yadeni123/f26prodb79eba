var express = require('express');
var router = express.Router();
var tool_controller = require('../controllers/tool');

// GET request for list of all tool items.
router.get('/', tool_controller.tool_list);

module.exports = router;