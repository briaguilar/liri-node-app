require("dotenv").config();
//var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);




//////////////////////////OMDb//////////////////////////////////

    ///////////////// axios ////////////////////////
var axios = require("axios");
var movieName = process.argv[3];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    /////////////// Testing for debug ////////////
//console.log(queryUrl); // Works!

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
        var mrNobody = "http://www.imdb.com/title/tt0485947/"
        if (movieName === "") {
            console.log(mrNobody.data.Title);
        } 
        console.log(error.config);
    });

////////////// OMDb Works except for the Mr. Nobody  //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


