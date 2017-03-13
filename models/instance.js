var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    order: {type: Number, min: 1, required: true},
    name: {type: String, unique: true, required: true},
    description: {type: String, required: true},
    postDate: {type: Date, default: Date.now, required: true},
    stats: {type: String},
    data: {type: String},
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Instance', schema);