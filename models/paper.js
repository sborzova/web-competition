var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var schema = new Schema({
    citation: {type: String, required: true},
    url: {type: String}
});

module.exports = mongoose.model('Paper', schema);