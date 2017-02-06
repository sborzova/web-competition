var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    instances: [{type: Schema.Types.ObjectId, ref: 'Instance'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('InstanceGroup', schema);