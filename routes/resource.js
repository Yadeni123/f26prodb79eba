var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var tool_controller = require('../controllers/tool');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// TOOL ROUTES ///
// POST request for creating a Tool.
router.post('/tools', tool_controller.tool_create_post);

// DELETE request to delete Tool.
router.delete('/tools/:id', tool_controller.tool_delete);

// PUT request to update Tool.
router.put('/tools/:id', tool_controller.tool_update_put);

// GET request for one Tool.
router.get('/tools/:id', tool_controller.tool_detail);

// GET request for list of all Tool items.
router.get('/tools', tool_controller.tool_list);

module.exports = router;