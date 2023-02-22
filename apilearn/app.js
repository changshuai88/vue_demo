var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 改写
var http = require('http');
var server = http.createServer(app);

// view engine setup模板
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//日志的
// app.use(logger('dev'));
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler 获取404错误
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler 错误处理
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// 不用在导出
// module.exports = app;

// 重写端口
server.listen('3000');