var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, unique: true, required: true},
    state: {type: Boolean, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Preference', schema);