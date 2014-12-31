// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var path 	 = require('path');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash 	 = require('connect-flash');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {

	// set up our express application
	app.use(express.favicon());
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	//app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms

	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade'); // set up ejs for templating

	

	// required for passport
	app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});

// routes ======================================================================
require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);