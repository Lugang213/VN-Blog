var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getNote', function (req, res, next) {
    res.send('this is getNote')
});

module.exports = router;
