var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Solution = require('./solution');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
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