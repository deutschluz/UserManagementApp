const { engine } = require("express-handlebars");
const express = require("express");
const fs = require("fs");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./queries");
const morgan = require("morgan");
const Writable = require("stream").Writable;

let logStream = fs.createWriteStream("app.log");
const port = process.env.PORT;
const app = express();
// setup the logger
app.use(
  morgan("tiny", {
    stream: logStream,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

//set up static file dir
app.use(express.static("public"));

//templating engine
app.engine(
  ".hbs",
  engine({
    layoutsDir: "views/layouts",
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");
app.get("/", (req, res) => {
  const data = { pageTitle: "My Website", heading: "Welcome!" };
  res.render("home", data);
});

// Define a middleware function that handles 404 errors
function handle404Error(req, res, next) {
  res.status(404).render("404", {
    heading: "404 - Page Not Found",
  });
}

// Register the middleware function
app.use(handle404Error);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
