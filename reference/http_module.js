const http = require("http");

// Create a basic server object

http.createServer((req, res) => {
  // Write a response
  res.write("First server, let's gooooooooooo") // res outputs on the browser
  res.end() // close the writing moment
}).listen(5000, () => console.log("Server running...")) // needs to listen to a PORT in order to run...

