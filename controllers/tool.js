var Tool = require('../models/tools');

// List of all Tools
exports.tool_list = async function(req, res) {
    try {
        const theTools = await Tool.find();
        res.render('tools', { title: 'Tool Search Results', results: theTools });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Tool.
exports.tool_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Tool detail: ' + req.params.id);
};

// Handle Tool create on POST.
exports.tool_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Tool create POST');
};

// Handle Tool delete from on DELETE.
exports.tool_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Tool delete DELETE ' + req.params.id);
};

// Handle Tool update form on PUT.
exports.tool_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Tool update PUT ' + req.params.id);
};