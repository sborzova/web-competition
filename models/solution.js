var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    unassigned: {type: Number, required: true},
    total: {type: Number, required: true},
    sc: {type: Number, required: true},
    time: {type: Number, required: true},
    room: {type: Number, required: true},
    distr: {type: Number, required: true},
    technique: {type: String, required: true},
    info: {type: String, required: true},
    data: {type: String},
    instance: {type: Schema.Types.ObjectId, ref: 'Instance'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    paper: {type: Schema.Types.ObjectId, ref: 'Paper'},
    postDate: {type: Date, default: Date.now, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Solution', schema);