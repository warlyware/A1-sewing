var express = require('express');
var router = express.Router();

var api_key = process.env.MAILGUN_API_KEY;
var domain = 'sandbox96c9107eb23447aeaed0270f0c3c3a4f.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {

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
