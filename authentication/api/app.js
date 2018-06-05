const createError = require('http-errors');
const express = require('express');
const config = require("config");
const path = require('path');
const cookieParser = require('cookie-parser');

var app = express();
let port = config.server.port || 9001;
let serverOptions = config.server.options || {};
let isSSLServer = false;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/users', require('./api/users/controller'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start Server
let createServerCallback = () => {
  console.log(`server listening at port: ${port}`); // eslint-disable-line
};
if (isSSLServer) {
  https.createServer(serverOptions, app).listen(port, createServerCallback);
} else {
  app.listen(port, createServerCallback);
}

module.exports = app;
