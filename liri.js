var keys = require("./keys.js")
console.log(keys);

var request = require('request');

var arg = process.argv;

var fs = require("fs");

var Twitter = require('twitter');

var params = {screen_name: '@RobertL80500116', count: '20'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error) {
		console.log(tweets);
	}
});

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


var liri = {

	says() {
		console.log("============================================");
		console.log("says function");
		fs.readFile("random.txt", "utf-8", function(error, data) {
			if (error) {
				return console.log(error);
			}
			console.log(data);
			var command = data.split(",");
			console.log(command);
			arg[2] = command[0];
			arg[3] = command[1];
			liri.music();
		})
	},

	movie() {
		if (!arg[3]) {
			console.log("============================================");
			console.log("Since you did not enter a movie title, please see the results below for the movie \"Mr. Nobody\"!");
			request("http://www.omdbapi.com/?t=mr+nobody+&y=&plot=short&apikey=40e9cece", function(error, response, body) {
				if (!error && response.statusCode === 200) {
					console.log();
					console.log("The movie's title is: " + JSON.parse(body).Title);
					console.log("This movie was released in the year: " + JSON.parse(body).Year);
					console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
					console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);
					console.log("The movie was produced in: " + JSON.parse(body).Country);
					console.log("The language(s) this movie was made in is/are: " + JSON.parse(body).Language);
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
					console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);
					console.log("The movie was produced in: " + JSON.parse(body).Country);
					console.log("The language(s) this movie was made in is/are: " + JSON.parse(body).Language);
					console.log("The movie's plot is: " + JSON.parse(body).Plot);
					console.log("The movie's actors are: " + JSON.parse(body).Actors);
				}
			});
		}
	},


	tweets() {
		console.log("============================================");
		console.log("Below are the last 20 Tweets on this account");
	},

	music() {
		console.log("============================================");
		console.log("music function");
		var song = arg[3];
		console.log(arg[3]);
	},



};

console.log(liri);

var runtime = (function() {
	if (arg[2] === "my-tweets") {
		liri.tweets();
	} else if (arg[2] === "spotify-this-song") {
		liri.music();
	} else if (arg[2] === "movie-this") {
		liri.movie();
	} else if (arg[2] === "do-what-it-says") {
		liri.says();
	}
})();

