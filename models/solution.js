var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    postDate: {type: Date, default: Date.now, required: true},
    data: {type: Buffer},
    instance: {type: Schema.Types.ObjectId, ref: 'Instance'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    technique: {type: Schema.Types.ObjectId, ref: 'Technique'},
    paper: {type: Schema.Types.ObjectId, ref: 'Paper'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Solution', schema);