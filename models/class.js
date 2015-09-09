var mongoose = require('mongoose');

var classSchema = mongoose.Schema({
  type: String,
  date: String,
  paid: Boolean,
  attendingNotPaid: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  attendingPaid: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
});

var SewingClass = mongoose.model('SewingClass', classSchema);

module.exports = SewingClass;
