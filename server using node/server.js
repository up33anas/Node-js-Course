const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const http = require("http");
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

const whitelist = [
  //   "https://google.com",
  "http://localhost:3500",
  "http://locahost:5500",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

// Cross Origin Resource Sharing
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

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

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ Error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

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

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
