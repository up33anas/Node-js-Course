const express = require("express");
const router = express.Router();
const path = require("path");

// "/", "/index", "/index.html"
router.get(["/", "/index", "/index.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

// "/new-page", "/new-page.html"
router.get(["/new-page", "/new-page.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

// Redirect "/old-page" → "/new-page.html"
router.get("/old-page", (req, res) => {
  res.redirect(301, "/new-page.html");
});

module.exports = router;
