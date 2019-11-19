require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require('fs')

/* -- Spotify Vars -- */
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var searchField = process.argv.slice(3).join(" ");

console.log(searchField)

/* -- Concert Vars -- */
var concertQuery = "https://rest.bandsintown.com/artists/" + searchField + "/events?app_id=codingbootcamp"

/* ---------------- Switches ----------------*/
switch (command) {
  case "spotify-this-song":
    spotThis(searchField);
    break;
  case "concert-this":
    concertThis(searchField);
    break;
  case "do-what-it-says":
    randomCall();
      break;
    case "movie-this":
      movieThis(searchField);
      break;
}

/* ---------------- Spotify This ------------------*/
function spotThis(songChoice) {
  
    spotify.search({
      type: 'track',
      query: songChoice
    }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log("----------BAND NAME")
      console.log(data.tracks.items[0].artists[0].name);
      console.log("\n----------SPOTIFY LINK")
      console.log(data.tracks.items[0].artists[0].external_urls.spotify);
      console.log("\n----------BAND NAME")
      console.log(data.tracks.items[0].album.name);
      console.log("\n----------ALBUM")
      console.log(data.tracks.items[1].name);
      console.log("-------------------------------------")
    });
  
}

/* ---------------- Concert This / Bands in Town ------------------*/
function concertThis(artist) {
var concertQuery = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(concertQuery).then(function (response) { 
  console.log("------------------");
  console.log("Venue Name: " + response.data[0].venue.name);
  console.log("------------------");
  console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
  console.log("------------------");
  console.log("Event Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
  console.log("------------------");

}).catch(function (error) {
	console.log(error)
})
};

/* ---------------- Movie This ------------------*/
function movieThis(movie) {

var movieQuery =  "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  axios.get(movieQuery).then(function (response) {
    console.log("------------------");
    console.log("Movie Name: " + response.data.Title)
    console.log("------------------");
    console.log("Year: " + response.data.Year);
    console.log("------------------");
  })
}

/* ---------------- Do What It Says ------------------*/
function randomCall() {
  fs.readFile("random.txt", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR REPORTED: ", err);
    }
    var dataArray = data.split(",");
    action = dataArray[0];
    value = dataArray[1];

    if (action === "concert-this") {
        concertThis(value);
    }
    else if (action === "spotify-this-song") {

        spotThis(value);
    } else {
        movieThis(value);
    }
});
}