// Use in-built node modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Create port
const PORT = 8080;

// Create HTTP server instance
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const homepage = path.join(__dirname, "index.html");

    // Read html from disk
    fs.readFile(homepage, (err, content) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("500 internal server error");
        return;
      }

      // set correct header for html content
      res.writeHead(200, { "content-type": "text/html" });
      res.end(content); // send the file content
    });
  } else if (req.method === "GET" && req.url === "/about") {
    const aboutPage = path.join(__dirname, "about.html");

    fs.readFile(aboutPage, (err, content) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("500 internal server error");
        return;
      }

      res.writeHead(200, { "content-type": "text/html" });
      res.end(content);
    });
  } else if (req.method === "GET" && req.url === "/contact-me") {
    const contactMePage = path.join(__dirname, "contact-me.html");

    fs.readFile(contactMePage, (err, content) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("500 internal server error");
        return;
      }

      res.writeHead(200, { "content-type": "text/html" });
      res.end(content);
    });
  } else {
    const errorPage = path.join(__dirname, "404.html");

    // Fallback for non-existenet route
    fs.readFile(errorPage, (err, content) => {
      res.writeHead(400, { "content-type": "text/html" });
      console.log(errorPage);
      res.end(content);
    });
  }
});

// Bind the server to your designated port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
