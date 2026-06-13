// Use in-built node modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Create port
const PORT = 8080;

// Create HTTP server instance
const server = http.createServer((req, res) => {
  // initialize file path
  let filePath;

  // update file path
  if (req.url === "/") {
    filePath = path.join(__dirname, "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "about.html");
  } else if (req.url === "/contact-me") {
    filePath = path.join(__dirname, "contact-me.html");
  } else {
    filePath = path.join(__dirname, "404.html");
    res.statusCode = 400;
  }

  console.log(filePath);

  // Read and send content
  fs.readFile(filePath, (err, content) => {
    // handle error
    if (err) {
      res.statusCode = 500;
      res.end("Internal server erro");
      return;
    }
    // respond with content
    res.setHeader("content-type", "text/html");
    res.end(content);
  });
});

// Bind the server to your designated port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
