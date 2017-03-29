var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Paper = require('./paper');

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

schema.post('remove', function (solution) {
    if (solution.paper){
        var solutionModel = mongoose.model('Solution', schema);
        solutionModel.find()
            .where('paper').equals(solution.paper)
            .exec(function (err, solutions) {
                if (solutions.length === 0){
                    Paper.findById(solution.paper, function (err, paper) {
                        paper.remove();
                    })
                }
            })
    }
});

module.exports = mongoose.model('Solution', schema);