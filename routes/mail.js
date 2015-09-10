var express = require('express');
var router = express.Router();

var api_key = process.env.MAILGUN_API_KEY;
var domain = 'sandbox96c9107eb23447aeaed0270f0c3c3a4f.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

router.post('/admin', function(req, res, next) {

  req.body.to = "danward@gmail.com";
  var emailData = req.body;

  mailgun.messages().send(emailData, function (error, body) {
    if (error) {
      console.log('ERR:', error);
    }
    console.log(body);
    res.send(body);
  });
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
