var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Paper = require('./paper');
var File = require('./file');

var schema = new Schema({
    unassigned: {type: Number, required: true},
    total: {type: Number, required: true},
    sc: {type: Number, required: true},
    time: {type: Number, required: true},
    room: {type: Number, required: true},
    distr: {type: Number, required: true},
    technique: {type: String, required: true},
    info: {type: String, required: true},
    data: {type: Schema.Types.ObjectId, ref: 'File', required: true},
    instance: {type: Schema.Types.ObjectId, ref: 'Instance', required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    paper: {type: Schema.Types.ObjectId, ref: 'Paper'},
    submissionTime: {type: Date, default: Date.now, required: true},
    visible: {type: Boolean, default: true, required: true}
});

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
    File.findById(instance.data, function (err, file) {
        file.remove();
    });
});

module.exports = mongoose.model('Solution', schema);