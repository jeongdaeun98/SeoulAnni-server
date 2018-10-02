var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
	identy: String,
	password: String,
});

module.exports = mongoose.model('logins',LoginSchema);
