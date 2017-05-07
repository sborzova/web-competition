var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

var schema = new Schema({
    content: {type: Buffer}
});

module.exports = mongoose.model('File', schema);