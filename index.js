const express = require("express");
const server = express();

OMDB_APIKEY = process.env.APIKEY;
let PORT;
if (process.env.PORT !== undefined) {
  PORT = process.env.PORT;
} else {
  PORT = 3000;
}
server.listen(PORT, () => {
  console.log("Server started");
});

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
  let queryParam = req.query.searchQuery;
  const url = `http://omdbapi.com/?apikey=${APIKEY}&s=${queryParam}`;
  res.json(
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
  );
  // after fetch, movies.data to get the data part of the response
});
