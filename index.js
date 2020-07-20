const axios = require("axios");
const express = require("express");
const server = express();

OMDB_APIKEY = process.env.OMDB_APIKEY;
// let PORT;
// if (process.env.PORT !== undefined) {
//   PORT = process.env.PORT;
// } else {
//   PORT = 3000;
// }

server.listen(process.env.PORT || 3000, () =>
  console.log("Server is running...")
);
// server.listen(PORT, () => {
//   console.log("Server started");
// });

// Create a get route to go to api call
//localhost:300/movies?s=smith
// Go to OMDB api and search for s
//Need to create get fo
/*
server.get("/movies/:s", function (req, res) {
  res.send("Hello World");
});
*/
server.get("/movies/:searchQuery", function (req, res) {
  //fetch http://ombdapi.com/ + api key + search query param
  let queryParam = req.params.searchQuery;
  const url = `http://omdbapi.com/?apikey=${OMDB_APIKEY}&s=${queryParam}`;
  axios.get(url).then(function (response) {
    // handle success
    res.json(response.data);
  });

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => res.json(data));
  // after fetch, movies.data to get the data part of the response
});
