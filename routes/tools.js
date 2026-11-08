var express = require('express');
var router = express.Router();

/* GET search results page. */
router.get('/', function(req, res, next) {
  res.render('tools', { title: 'Search Results Tools' });
});

module.exports = router;