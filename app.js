const { engine } = require("express-handlebars");
const express = require("express");
const fs = require("fs");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./queries");
const morgan = require("morgan");
const Writable = require("stream").Writable;
const LR = require("livereload");
const connLR = require("connect-livereload");
let logStream = fs.createWriteStream("app.log");
const port = process.env.PORT;
const routes = require("./server/routes/user_");

//setup live reload for the browser
const LRServer = LR.createServer();
LRServer.server.once("connection", () => {
  setTimeout(() => {
    LRServer.refresh("/");
  }, 100);
});

//start server
const app = express();

//register reload function
app.use(connLR());

// setup the logger
app.use(
  morgan("dev", {
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

//register router with server
app.use("/", routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
