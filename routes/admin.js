var express = require('express');
var router = express.Router();

var SewingClass = require('../models/class.js');
var User = require('../models/user.js');

router.get('/classes', function(req, res, next) {
  SewingClass.find({}).populate('attendingPaid').populate('attendingNotPaid').exec(function(err, classes) {
    res.json(classes);
  });
});


router.get('/classes/:classId', function(req, res, next) {

  var classId = req.params.classId;
  var attendingPaid = [];
  var attendingNotPaid = [];
  var classType, classDate;

  SewingClass.findById(classId).populate('attendingPaid').populate('attendingNotPaid').exec(function(err, sewingClass) {

    console.log('REQUESTED CLASS', sewingClass);
    classType = sewingClass.type;
    classDate = sewingClass.date;
    sewingClass.attendingPaid.forEach(function(student, i, paidArr) {
      attendingPaid.push(student);
    });
    sewingClass.attendingNotPaid.forEach(function(student, i, paidArr) {
      attendingNotPaid.push(student);
    });
    res.json({
      'class': classType,
      'date': classDate,
      'paid': attendingPaid,
      'notPaid': attendingNotPaid
    });
  });
});

module.exports = router;
