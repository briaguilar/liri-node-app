require("dotenv").config();
var keys = require("./keys.js");


/////////////////////////// IMDb //////////////////////////////////////

    ///////////////// axios ////////////////////////
var axios = require("axios");
var movieName = process.argv[3];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


if (process.argv[2] === "movie-this") {
axios.get(queryUrl).then(
    function(response) {
        console.log("Movie Title: " + response.data.Title);
        console.log("Release date: " + response.data.Released);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country Produced: " + response.data.Country);
        console.log("Movie Language: " + response.data.Language);
        console.log("Movie Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    })
    .catch(function(mrNobody) {
        if (movieName === "") {
            movieName === "Mr Nobody"
            console.log(mrNobody);
        }
        console.log(error.config);
    });
}

////////////// IMDb Works except for the Mr. Nobody  //////////////////////////////


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
  .then(function(response) {
    console.log(response.tracks.items[0].artists[0].name);
    console.log(response.tracks.items[0].name);
    console.log(response.tracks.items[0].album.name)
  })
  .catch(function(err) {
    console.log(err);
  });
}

  //////////////////////////////////////////////////////////////////////


//////////////////////////// Bands in Town Artist Events ///////////////////////////////////////
var moment = require("moment")
var artist = process.argv[3];
queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

if (process.argv[2] === "concert-this") {
    axios.get(queryUrl).then(
        function(response) {
            //console.log(response.data);
            for (var i=0;i<response.data.length; i++) {
                console.log(response.data[i].venue.name)
                console.log("   City: " + response.data[i].venue.city)
                var original = response.data[i].datetime;
                console.log("   Show Date: " + moment(original.convert).format("MM/DD/YYYY"));
            }
        })
        .catch(function(err) {
            console.log(err);
        })
}
