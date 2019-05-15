var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminControll');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/itemAdd', adminController.itemAdd);

module.exports = router;
