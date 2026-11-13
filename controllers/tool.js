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
exports.tool_detail = async function(req, res) {
    console.log("detail " + req.params.id);
    try {
        let result = await Tool.findById(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(`{"error": document for id ${req.params.id} not found}`);
    }
};

// Handle Tool create on POST.
exports.tool_create_post = async function(req, res) {
    console.log(req.body);
    let document = new Tool();
    // We are looking for a body, since POST data comes from the request body
    document.tool_type = req.body.tool_type;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Tool delete from on DELETE.
exports.tool_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Tool delete DELETE ' + req.params.id);
};

// Handle Tool update form on PUT.
exports.tool_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Tool.findById(req.params.id);
        
        // Update the properties if they are sent in the request body
        if (req.body.tool_type) toUpdate.tool_type = req.body.tool_type;
        if (req.body.size) toUpdate.size = req.body.size;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        
        let result = await toUpdate.save();
        console.log("Update success");
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(`{"error": Update for id ${req.params.id} failed: ${error}}`);
    }
};