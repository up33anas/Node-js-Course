const express = require("express");
const router = express.Router();
const path = require("path");

// "/", "/index", "/index.html"
router.get(["/", "/index", "/index.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
