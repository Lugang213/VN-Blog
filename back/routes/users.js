var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/user', function (req, res, next) {
  // res.send('respond with a resource');
  res.json({'name':'小马哥','age':18})
});

module.exports = router;
