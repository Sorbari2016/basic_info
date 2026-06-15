// Import packages
import express from "express";
import path from "path";

const app = express(); // initial an express instance

// Use a middleware to access static files
app.use("/public", express.static(path.join(import.meta.dirname, "public")));

// Define GET route to get homepage
app.get("/", (req, res) => {
  const filePath = path.join(import.meta.dirname, "index.html"); // create absolute path
  res.sendFile(filePath);
});

// Define GET route for about page
app.get("/about", (req, res) => {
  const filePath = path.join(import.meta.dirname, "pages/about.html");
  res.sendFile(filePath);
});

// Define GET route for contact us page
app.get("/contact-us", (req, res) => {
  const filePath = path.join(import.meta.dirname, "pages/contact-us.html");
  res.sendFile(filePath);
});

// Handle unavailable resource
app.use((req, res, next) => {
  res.status(404);
  const filePath = path.join(import.meta.dirname, "pages/404.html");
  res.sendFile(filePath);
});

// Define port
const PORT = 8080;

// Start an express server
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server is running on Port ${PORT}`);
});
