var express = require('express');
var router = express.Router();

var api_key = process.env.MAILGUN_API_KEY;
var domain = 'sandbox96c9107eb23447aeaed0270f0c3c3a4f.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var SewingClass = require('../models/class.js');
var User = require('../models/user.js');

router.post('/admin', function(req, res, next) {

  req.body.to = "danward@gmail.com";
  var emailData = req.body;
  var attendingPaid = [];
  var attendingNotPaid = [];

  SewingClass.find({}).populate('attendingPaid').populate('attendingNotPaid').exec(function(err, classes) {
    classes.forEach(function(sewingClass, i) {
      console.log('CLASSES', sewingClass);
      sewingClass.attendingPaid.forEach(function(student, i, paidArr) {
        attendingPaid.push(student);
      });
      sewingClass.attendingNotPaid.forEach(function(student, i, paidArr) {
        attendingNotPaid.push(student);
      });
    });
    res.json({
      'paid': attendingPaid,
      'notPaid': attendingNotPaid
    });
  });

  // mailgun.messages().send(emailData, function (error, body) {
  //   if (error) {
  //     console.log('ERR:', error);
  //   }
  //   console.log(body);
  //   res.send(body);
  // });
});

router.post('/user', function(req, res, next) {

  var emailData = req.body;

  mailgun.messages().send(emailData, function (error, body) {
    if (error) {
      console.log('ERR:', error);
    }
    console.log(body);
    res.send(body);
  });
});

module.exports = router;
