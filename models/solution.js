var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    unassigned: {type: Number, required: false},
    total: {type: Number, required: false},
    sc: {type: Number, required: false},
    time: {type: Number, required: false},
    room: {type: Number, required: false},
    distr: {type: Number, required: false},
    info: {type: String, required: false},
    data: {type: String},
    instance: {type: Schema.Types.ObjectId, ref: 'Instance'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    technique: {type: Schema.Types.ObjectId, ref: 'Technique'},
    paper: {type: Schema.Types.ObjectId, ref: 'Paper'},
    postDate: {type: Date, default: Date.now, required: false}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Solution', schema);