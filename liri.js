require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");

/* -- Spotify Vars -- */
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var searchField = process.argv.slice(3).join(" ");

/* -- Concert Vars -- */
var concertQuery = "https://rest.bandsintown.com/artists/" + searchField + "/events?app_id=codingbootcamp"


/* ---------------- Switches ----------------*/
switch (command) {
  case "spotify-this-song":
    spotThis();
    break;
  case "concert-this":
    concertThis();
    break;
  case "randomCall":
    randomCall();
      break;
}

/* ---------------- Spotify This ------------------*/
function spotThis() {
  if (command === "spotify-this-song") {
    spotify.search({
      type: 'track',
      query: searchField
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
}

/* ---------------- Concert This / Bands in Town ------------------*/
function concertThis() {
axios.get(concertQuery).then(function (response) { 
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
var movieQuery =  "https://www.omdbapi.com/?t=" + value + "&y=&plotshort&apikey=bf485d7d"

function movieThis() {
  axios.get(movieQuery).then(function (response) {
    console.log("Movie Name: " + response.data.title)
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
        spotifyThis(value);
    } else {
        movieThis(value);
    }
});
}