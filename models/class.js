var mongoose = require('mongoose');

var classSchema = mongoose.Schema({
  type: String,
  date: Date,
  paid: Boolean
});

var Class = mongoose.model('Class', classSchema);

module.exports = Class;
