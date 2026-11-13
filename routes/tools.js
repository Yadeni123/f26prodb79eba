var express = require('express');
var router = express.Router();
var tool_controller = require('../controllers/tool');

// GET request for list of all tool items.
router.get('/', tool_controller.tool_list);

// GET request for one tool by ID.
router.get('/:id', tool_controller.tool_detail);

// PUT request to update a tool by ID.
router.put('/:id', tool_controller.tool_update_put);

module.exports = router;