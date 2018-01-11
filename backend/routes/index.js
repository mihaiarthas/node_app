var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let dir = '/home/ubuntu/workspace/frontend';
    res.sendFile('index.html', {"root": dir});
});

module.exports = router;