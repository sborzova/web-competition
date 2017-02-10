var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    postDate: {type: Date, default: Date.now, required: true},
    stats: {type: Buffer},
    data: {type: Buffer},
    isOn: {type: Boolean, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Instance', schema);