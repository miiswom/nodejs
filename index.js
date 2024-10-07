const http = require("http");
const path = require("path");
const fs = require("fs");

// Simple server on localhost:5000

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {  // ie if this is the Homepage
  //     fs.readFile(
  //       path.join(__dirname, "/public", "index.html"), (err, content) => {
  //       if (err) throw err;

  //       res.writeHead(200, { 'Content-Type': 'text/html' })
  //       res.end(content)
  //     })
  //   }
  //   if (req.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "/public", "about.html"), (err, content) => {
  //       if (err) throw err;

  //       res.writeHead(200, { 'Content-Type': 'text/html' })
  //       res.end(content)
  //     })
  //   }

  //   // Create a basic REST API that serves JSON
  //   if (req.url === "/api/users") {
  //     const users = [
  //       {name:"Bob Smith", age:40},
  //       {name:"John Doe", age:40},
  //       {name:"Jane Doe", age:40},
  //     ];

  //     res.writeHead(200, { 
  //      'Content-Type': 'application/json' 
  //    })
  //     res.end(JSON.stringify(users))
  //   }

  // Build file path

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Get the extension file:
  let extname = path.extname(filePath);

  // Get the initial content type:
  let contentType = "text/html"

  // Check what is the extension type and set the content type:
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "text/jpg";
      break;
  };

  // Read the File

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {  // <--- Page not found
        fs.readFile(path.join(__dirname, "/public", "404.html"), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, "utf8")
        })
      } else {
        // else if it's some type of server error:
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`)
      }

    } else {
      // else if it's a success 
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, "utf8")
    }
  })
});




// When deployed PORT will first look for the host's 'environment variable' in process.env.PORT. It will first look for the environment variable, then if not found it will run on 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// print the url being requested on the server 
// ---> console.log(req.url)
