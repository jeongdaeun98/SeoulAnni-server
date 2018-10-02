var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
//var multer 		= require('multer');
//var upload = multer({dest:'./static/'});

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){
	console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

var Location  = require('./models/location');
var Wlocation = require('./models/wlocation');
var Login = require('./models/login');
app.use(bodyParser.urlencoded({limit:'50mb', extended: true }));
app.use(bodyParser.json({limit:'50mb'}));

var port = process.env.PORT || 8080;

var router = require('./routes/fourindex.js')(app, Location);
var wrouter = require('./routes/index.js')(app, Wlocation);
var logrouter = require('./routes/logindex.js')(app, Login);
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
 });
