var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
    creator: String,
    document: String,
    front: String,
    back: String
},
{
timestamps: true
});

module.exports = mongoose.model('Card', CardSchema);
