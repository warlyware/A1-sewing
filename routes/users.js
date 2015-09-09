var express = require('express');
var router = express.Router();

var User = require('../models/user.js');


router.get('/', function(req, res, next) {
  res.send('respond with users');
});

router.post('/', function(req, res, next) {
  var user = new User(req.body);
  console.log('user: ', user);
  user.save(function(err, savedUser) {
    console.log('savedUser: ', savedUser);
    res.json(savedUser);
  });
});

module.exports = router;
