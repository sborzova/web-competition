var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Solution = require('./solution');

var schema = new Schema({
    order: {type: Number, min: 1, required: true},
    name: {type: String, unique: true, required: true},
    description: {type: String, required: true},
    postDate: {type: Date, default: Date.now, required: true},
    stats: {type: String},
    data: {type: Buffer},
});

schema.plugin(mongooseUniqueValidator);

schema.post('remove', function (instance) {
    Solution.find()
        .where('instance').equals(instance)
        .exec(function (err, solutions){
            for (var i=0; i<solutions.length; i++){
                solutions[i].remove();
            }
        });
});

module.exports = mongoose.model('Instance', schema);