var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//router path
var app = express();
var loginRouter = require('./routes/login.routes');
var diaryRouter = require('./routes/diary.routes');
var boardRouter = require('./routes/board.routes');
var mypageRouter = require('./routes/mypage.routes');

//view engine setup
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));
app.use('/', express.static(path.join(__dirname,'public')));

if (process.env.ENODE_ENV == "production") {
    app.use(logger("combined"));
  } else {
    app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//router
app.use("/login", loginRouter);
app.use("/diary", diaryRouter);
app.use("/board", boardRouter);
app.use("/mypage", mypageRouter);
// app.use("/board", boardRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    const logger = require("./config/logger");
  
    // render the error page
    res.status(err.status || 500);
    logger.error("Server error" + "\n \t" + res.locals.error);
    res.send({ Message: "예외적이거나 예측하지 못한 에러 발생", Status: 500 });
  });

app.listen(3500,()=>{  //포트설정
    console.log('3500번 포트에서 서버 대기중입니다!');
});

module.exports = app;