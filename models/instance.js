var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

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

/**
 * When deleting instance, remove all files which contain instance's id.
 * Remove also all solutions which contain instance's id.
 */
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