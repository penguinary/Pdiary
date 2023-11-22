var express = require("express");

//router path
var loginRouter = require("./routes/login.routes.js")
var boardRouter = require("./routes/board.routes.js")

var app = express();

//view engine setup

app.use(express.json());

//router
app.use("/", loginRouter);
app.use("/board", boardRouter);

//catch 404 and forward to error handler

//error handler

module.exports = app;