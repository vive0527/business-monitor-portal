var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("this is api root");
});

router.post('/login', function (req, res, next) {
    var result = {returnCode:"",returnMsg:""}
    if (req.body.username == 'sunsz' && req.body.password == "123") {
        console.log('login success');
        result.returnCode = "00000000";
        result.returnMsg = "success";
    } else {
        console.log('login failure');
        result.returnCode = "00000001";
        result.returnMsg = "failure";

    }
    res.json(result);
});

module.exports = router;
