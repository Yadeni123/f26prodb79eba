var express = require('express');
var router = express.Router();

/* GET grid page. */
router.get('/', function(req, res, next) {
  let query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  
  // Extract and parse query parameters
  let rows = parseInt(query.rows);
  let cols = parseInt(query.cols);

  res.render('grid', { 
    title: 'Grid Display', 
    query: query, 
    rows: rows, 
    cols: cols 
  });
});

module.exports = router;