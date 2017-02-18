var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, unique: true, required: true},
    description: {type: String, required: true},
    postDate: {type: Date, default: Date.now, required: true},
    stats: {type: String, required: true},
    data: {type: String, required: true},
    isOn: {type: Boolean, default: false, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Instance', schema);