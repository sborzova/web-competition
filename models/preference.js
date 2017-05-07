var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

var schema = new Schema({
    name: {type: String, unique: true, required: true},
    state: {type: Boolean, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Preference', schema);