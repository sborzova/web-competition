var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: Buffer}
});

module.exports = mongoose.model('File', schema);