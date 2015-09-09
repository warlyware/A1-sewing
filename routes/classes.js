var express = require('express');
var router = express.Router();

var SewingClass = require('../models/class.js');
var User = require('../models/user.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('respond with classes');
});

router.post('/', function(req, res, next) {
  var sewingClass = new SewingClass(req.body);
  console.log('class: ', sewingClass);
  sewingClass.save(function(err, savedClass) {
    console.log('savedClass: ', savedClass);
    res.json(savedClass);
  });
});

router.post('/register', function(req, res, next) {
  var classId = req.body.classId;
  var userId = req.body.userId;
  User.findById(userId, function(err, user) {
    SewingClass.findById(classId, function(err, sewingClass) {
      user.classes.push(sewingClass._id);
      sewingClass.attending.push(user._id);

      sewingClass.save(function(err, savedClass) {
        user.save(function(err, savedUser) {
          res.json({
            'user': savedUser,
            'class': savedClass
          })
        });
      });


    });
  });
});


module.exports = router;
