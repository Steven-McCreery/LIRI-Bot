var keys = require("./keys.js")
console.log(keys);

var request = require('request');

var arg = process.argv;

var fs = require("fs");

var Twitter = require('twitter');

// var params = {screen_name: 'nodejs'};

// client.get('statuses/user_timeline', params, function(error, tweets, response) {
// 	if (!error) {
// 		console.log(tweets);
// 	}
// });

// var Spotify = require('node-spotify-api');

// var spotify = new Spotify({
// 	id: <your spotify client id>,
// 	secret: <your spotify client secret>
// });

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
// 	if (err) {
// 		return console.log('Error occurred: ' + err);
// 	}
// 	console.log(data); 
// });


// request('http://www.google.com', function (error, response, body) {
// 	console.log('error:', error); // Print the error if one occurred
// 	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// 	console.log('body:', body); // Print the HTML for the Google homepage.
// });


var tweets = function() {
	console.log("============================================");
	console.log("Below are the last 20 Tweets on this account");
}

var music = function () {
	console.log("music function");
	return;
}

var movie = function() {
	if (!arg[3]) {
		console.log("============================================");
		console.log("Since you did not enter a movie title, please see the results below for the movie \"Mr. Nobody\"!");
		request("http://www.omdbapi.com/?t=mr+nobody+&y=&plot=short&apikey=40e9cece", function(error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log();
				console.log("The movie's title is: " + JSON.parse(body).Title);
				console.log("This movie was released in the year: " + JSON.parse(body).Year);
				console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
				console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).imdbRating);
				console.log("The movie was produced in the country: " + JSON.parse(body).Ratings[1].Value);
				console.log("The language this movie was made in is: " + JSON.parse(body).Language);
				console.log("The movie's plot is: " + JSON.parse(body).Plot);
				console.log("The movie's actors are: " + JSON.parse(body).Actors);
			}
		});
	} else {
		console.log("============================================");
		console.log("Please see below for your movie's results!")
		request("http://www.omdbapi.com/?t=" + arg[3] + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log();
				console.log("The movie's title is: " + JSON.parse(body).Title);
				console.log("This movie was released in the year: " + JSON.parse(body).Year);
				console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
				console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).imdbRating);
				console.log("The movie was produced in the country: " + JSON.parse(body).Ratings[1].Value);
				console.log("The language this movie was made in is: " + JSON.parse(body).Language);
				console.log("The movie's plot is: " + JSON.parse(body).Plot);
				console.log("The movie's actors are: " + JSON.parse(body).Actors);
			}
		});
}

var says = function() {
	console.log("says function");
	return;
}

if (arg[2] = "my-tweets") {
	tweets();
} else if (arg[2] = "spotify-this-song") {
	music();
} else if (arg[2] = "movie-this") {
	movie();
} else if (arg[2] = "do-what-it-says") {
	says();
}


