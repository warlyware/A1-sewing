var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  classes: [{type: mongoose.Schema.ObjectId, ref: 'SewingClass'}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
