var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

/**
 * Database model schema for Paper.
 */
var schema = new Schema({
    citation: {type: String, required: true},
    url: {type: String}
});

module.exports = mongoose.model('Paper', schema);