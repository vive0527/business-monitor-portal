var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/",function(req,res){
    res.redirect("");
})
    .post('/login', function (req, res, next) {
    console.log(req.body.username);
    res.send('respond with a resource');
});

module.exports = router;
