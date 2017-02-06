var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var InstanceGroup = require('./instanceGroup');

var schema = new Schema({
    name: {type: String, required: true},
    courses: {type: Number, required: true},
    rooms: {type: Number, required: true},
    periodsPerDay: {type: Number, required: true},
    days: {type: Number, required: true},
    curricula: {type: Number, required: true},
    dailyMin: {type: Number, required: true},
    dailyMax: {type: Number, required: true},
    instanceGroup: {type: Schema.Types.ObjectId, ref: 'InstanceGroup', required: true}
});

schema.plugin(mongooseUniqueValidator);

schema.post('remove', function (instance) {
    InstanceGroup.findById(instance.instanceGroup, function (err, instanceGroup) {
        instanceGroup.instances.pull(instance);
        instanceGroup.save();
    });
});

module.exports = mongoose.model('Instance', schema);