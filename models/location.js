var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
	place: String,
	latitude: String,
	longitude: String
});

module.exports = mongoose.model('locations',LocationSchema);
