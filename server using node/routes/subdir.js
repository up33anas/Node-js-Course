const express = require("express");
const router = express.Router();
const path = require("path");

// "/subdir", "/subdir/index", "/subdir/index.html"
router.get(["/", "/index", "/index.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "index.html"));
});

// "/subdir/test", "/subdir/test.html"
router.get(["/test", "/test.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "test.html"));
});

module.exports = router;
