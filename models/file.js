var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

/**
 * Database model schema for File.
 */
var schema = new Schema({
    content: {type: Buffer}
});

module.exports = mongoose.model('File', schema);