# LIRI

Similar to Apple's SIRI- LIRI is a command line node app that displays data to you based on the parameters taken it.

### Technologies used
* Javascript
* jQuery
* Node.js
* [Axios](https://www.npmjs.com/package/axios)
* [Moment](https://www.npmjs.com/package/moment)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* [OMDB API](http://www.omdbapi.com)
* [Bands in Town AIP](http://www.artists.bandsintown.com/bandsintown-api)
* [Spotify API](https://www.npmjs.com/package/node-spotify-api).


### Installation
1. Navigate to liri.js.
2. Open Node terminal and type "npm install".
3. Type "node liri.js", "this is loaded" will display.

### How to use?
1. Spotify a song.
    * Type "node liri.js spotify-this-song back in black"
    * The Band, Spotify Link, Song & Album will display.

2. Find recent venue for a band.
    * Type "node liri.js concert-this maroon5"
    * The Venue name, location and event date will display.

3. Find a movie.
    * Type "node liri.js movie-this the matrix"
    * The Movie name and release date will display.

4. Do What It Says.
    * Type "node liri.js do-what-it-says"
    * By using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     * You can edit the text in random.txt to test this feature yourself.

### Credits
Created by Kevin Darcy, 2019 - For Rutgers Coding Bootcamping, J. Han's class.

