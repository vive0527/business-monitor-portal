var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("this is api root");
});

router.post('/login', function (req, res, next) {
    console.log(req.body.username);
    res.send('respond with a resource');
});

module.exports = router;
