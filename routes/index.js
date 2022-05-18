var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('Content-Type', 'text/html');
  res.send("24,959,978.37");
});

module.exports = router;
