var express = require('express');
var router = express.Router();

var User = require('../models/user.js');

router.post('/classes', function(req, res, next) {
  var user = new User(req.body);
  console.log('user: ', user);
  user.save(function(err, savedUser) {
    console.log('savedUser: ', savedUser);
    res.json(savedUser);
  });
});

module.exports = router;
