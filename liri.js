require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");


/////////////////////////// IMDb //////////////////////////////////////

var movieName = process.argv[3];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


if (process.argv[2] === "movie-this") {
    axios.get(queryUrl).then(
        function (response) {
            var info = response.data;
            var movieInfo = [
                "Movie Title: " + info.Title,
                "Release date: " + info.Released,
                "IMDb Rating: " + info.imdbRating,
                "Rotten Tomatoes Rating: " + info.Ratings[1].Value,
                "Country Produced: " + info.Country,
                "Movie Language: " + info.Language,
                "Movie Plot: " + info.Plot,
                "Actors: " + info.Actors
            ].join("\n");

            console.log(movieInfo);
        })
        .catch(function (error) {
            console.log(error);
        });
}




/////////////////////////////////////////////////////////////////////////////////////
//////////////////////// SPOTIFY ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: "d2a5fecdadd3463e933dcc3de112e80d",
    secret: "fd418f3f2f2d47ba895e24ccec67a878"
});
var userSong = process.argv[3];

if (process.argv[2] === "spotify-this-song") {
    spotify
        .search({ type: 'track', query: userSong })
        .then(function (response) {
            var info = response.tracks.items[0];
            var songInfo = [
                "Artist Name: " + info.artists[0].name,
                "Song Title: " + info.name,
                "Album Title: " + info.album.name
            ].join("\n")

            console.log(songInfo);
        })
        .catch(function (err) {
            console.log(err);
        });
}




//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// Bands in Town Artist Events ////////////////////////////
var moment = require("moment")
var artist = process.argv[3];
queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

if (process.argv[2] === "concert-this") {
    axios.get(queryUrl).then(
        function (response) {
            //console.log(response.data);
            for (var i = 0; i < response.data.length; i++) {
                var info = response.data[i];
                var original = response.data[i].datetime;
                var concertInfo = [
                    "Venue: " + info.venue.name,
                    "City: " + info.venue.city,
                    "Show Date: " + moment(original.convert).format("MM/DD/YYYY")
                ].join("\n");
                console.log(concertInfo + "\n");
            }
        })
        .catch(function (err) {
            console.log(err);
        })
}


////////////////////////////// Random.txt //////////////////////////////////
if (process.argv[2] === "do-what-it-says") {
    fs.readFile("./random.txt", (err, data) => {
        if (err) throw err;

        var content = data.toString().split(",");
        process.argv[2] = content[0];
        userSong = content[1];

        if (process.argv[2] === "spotify-this-song") {
            spotify
                .search({ type: 'track', query: userSong })
                .then(function (response) {
                    var info = response.tracks.items[0];
                    var songInfo = [
                        "Artist Name: " + info.artists[0].name,
                        "Song Title: " + info.name,
                        "Album Title: " + info.album.name
                    ].join("\n")

                    console.log(songInfo);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    });

}