var keys = require("./keys.js")
console.log(keys);

var arg = process.argv;

var fs = require("fs");

var Twitter = require('twitter');

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error) {
		console.log(tweets);
}
});

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
	id: <your spotify client id>,
	secret: <your spotify client secret>
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
	if (err) {
		return console.log('Error occurred: ' + err);
	}
	console.log(data); 
});

var request = require('request');
request('http://www.google.com', function (error, response, body) {
	console.log('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log('body:', body); // Print the HTML for the Google homepage.
});


if (arg[2] = "my-tweets") {
	tweets();
} else if (arg[2] = "spotify-this-song") {
	music(arg[3]);
} else if (arg[2] = "movie-this") {
	movie(arg[3]);
} else if (arg[2] = "do-what-it-says") {
	says(arg[3]);
}










