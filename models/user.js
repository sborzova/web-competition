var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

var Solution = require('./solution');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, unique: true, required: true,},
    role: {type: String, enum: ['user', 'admin'], default: 'user', required: true}
});

schema.plugin(mongooseUniqueValidator);

schema.post('remove', function (user) {
   Solution.find()
       .where('user').equals(user)
       .exec(function (err, solutions){
           for (var i=0; i<solutions.length; i++){
               solutions[i].remove();
           }
       });
});

module.exports = mongoose.model('User', schema);