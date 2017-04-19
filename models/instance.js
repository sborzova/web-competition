var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Solution = require('./solution');
var File = require('./file');

var schema = new Schema({
    order: {type: Number, min: 1, required: true},
    name: {type: String, unique: true, required: true},
    description: {type: String, required: true},
    submissionTime: {type: Date, default: Date.now, required: true},
    status: {type: Schema.Types.ObjectId, ref: 'File', required: true},
    data: {type: Schema.Types.ObjectId, ref: 'File', required: true},
});

schema.plugin(mongooseUniqueValidator);

schema.post('remove', function (instance) {
    Solution.find()
        .where('instance').equals(instance)
        .exec(function (err, solutions){
            for (var i = 0; i < solutions.length; i++){
                solutions[i].remove();
            }
        });
    File.findById(instance.status, function (err, file) {
        file.remove();
    });

    File.findById(instance.data, function (err, file) {
        file.remove();
    });
});

module.exports = mongoose.model('Instance', schema);