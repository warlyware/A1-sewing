var express = require('express');
var router = express.Router();

var SewingClass = require('../models/class.js');
var User = require('../models/user.js');



router.get('/', function(req, res, next) {
  SewingClass.find({}).populate('attending').exec(function(err, classes) {
    res.json(classes);
  });
});

// router.get('/:userId', function(req, res, next) {
//   var userId = req.params.userId;
//   User.findById(userId).populate('classes').exec(function(err, user) {
//     res.json(user);
//   });
// });

router.post('/', function(req, res, next) {
  var sewingClass = new SewingClass(req.body);
  console.log('class: ', sewingClass);
  sewingClass.save(function(err, savedClass) {
    console.log('savedClass: ', savedClass);
    res.json(savedClass);
  });
});

router.post('/pay', function(req, res, next) {
  var classId = req.body.classId;
  var userId = req.body.userId;
  User.findById(userId, function(err, user) {
    SewingClass.findById(classId, function(err, sewingClass) {
      sewingClass.attendingNotPaid.forEach(function(studentId, i) {
        console.log(userId);
        console.log(studentId);
        if (userId == studentId) {
          console.log('FOUND MATCH', userId);
          sewingClass.attendingNotPaid.splice(i, 1);
          sewingClass.attendingPaid.push(studentId);
        }
      });
      sewingClass.save(function(err, savedClass) {
        console.log('savedClass', savedClass);
        res.send(savedClass);
      });
    });
  });
});

router.post('/register', function(req, res, next) {
  var classId = req.body.classId;
  var userId = req.body.userId;
  User.findById(userId, function(err, user) {
    SewingClass.findById(classId, function(err, sewingClass) {
      user.classes.push(sewingClass._id);
      sewingClass.attendingNotPaid.push(user._id);
      sewingClass.save(function(err, savedClass) {
        user.save(function(err, savedUser) {
          res.json({
            'user': savedUser,
            'class': savedClass
          });
        });
      });
    });
  });
});


module.exports = router;
