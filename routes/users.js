var express = require('express');
var router = express.Router();

var User = require('../models/user.js');

router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

router.get('/:userId', function(req, res, next) {
  var userId = req.params.userId;
  User.findById(userId, function(err, user) {
    res.json(user);
  });
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
