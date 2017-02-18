var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    reference: {type: String, required: true},
    url: {type: String}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Paper', schema);