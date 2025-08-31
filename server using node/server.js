const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const PORT = process.env.PORT || 3500;

app.get(/^\/$|\/index(.html)?/, (req, res) => {
  //   res.sendFile("./views/index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get(/^\/new-page(\.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get(/^\/new-page(\.html)?$/, (req, res) => {
  res.redirect("new-page.html");
});

// app.all("*", (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });

//  Route Handlers
app.get(
  /^\/hello(\.html)?$/,
  (req, res, next) => {
    console.log("Attempted to load hello");
    next();
  },
  (req, res) => {
    res.send("Hello World");
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
