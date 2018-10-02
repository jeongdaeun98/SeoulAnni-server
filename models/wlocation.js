var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var WlocationSchema = new Schema({
        place: String,
        latitude: String,
        longitude: String
});

module.exports = mongoose.model('wlocations',WlocationSchema);

