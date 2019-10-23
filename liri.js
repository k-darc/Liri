require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
//-----------------
var spotify = new Spotify(keys.spotify);
console.log(process.argv[2]);
var command = process.argv[2];
var searchField = "";

var i;
for (i = 3; i < process.argv.length; i++) {
    searchField = searchField + process.argv[i] + " ";
    console.log(searchField);
}

if (command === "spotify-this-song") {
    spotify.search({ type: 'track', query: searchField }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        
        console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].artists[0].external_urls.spotify);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[1].name);
      });
    }

// Concert This
// node liri.js concert-this <artist/band name here>

// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


// // Spotify this song
// // node liri.js spotify-this-song '<song name here>'
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data.tracks.items[0].artists[0].name);
//   console.log(data.tracks.items[0].artists[0].external_urls.spotify);
//   console.log(data.tracks.items[0].album.name);
//   console.log(data.tracks.items[1].name);
//   });





// Movie This

// Do what it says