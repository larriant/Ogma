var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentSchema = new Schema({
    name: { type:String, required:true },
    creator: String,
    content: String
},
{
timestamps: true
});

module.exports = mongoose.model('Document', DocumentSchema);
