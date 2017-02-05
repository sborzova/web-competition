var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    content: {type: Schema.Mixed, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Instance', schema);