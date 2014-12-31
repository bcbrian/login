// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1', // your App ID
		'clientSecret' 	: '1', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback' //your call back url testing one already set up
	},

	'twitterAuth' : {
		'consumerKey' 		: '1',
		'consumerSecret' 	: '1',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '1',
		'clientSecret' 	: '1',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};