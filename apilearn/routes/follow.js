var express = require('express');
var router = express.Router();
let Follow = require('../controllers/FollowController');

router.post('/follow',Follow.follow);

module.exports = router;