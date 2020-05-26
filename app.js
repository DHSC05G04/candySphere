var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/indexRoute');
var homeRouter = require('./routes/homeRoute');
var adminRouter = require('./routes/adminRoute');
var financeiroRouter = require('./routes/financeiroRoute');
var clientesRouter = require('./routes/clientesRoute');
var funcionariosRouter = require('./routes/funcionariosRoute');
var pdvRouter = require('./routes/pdvRoute');
const usuariosRoute = require('./routes/usuariosRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/admin', adminRouter);
app.use('/financeiro', financeiroRouter);
app.use('/clientes', clientesRouter);
app.use('/funcionarios', funcionariosRouter);
app.use('/pdv', pdvRouter);
app.use('/usuarios',usuariosRoute)
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

module.exports = app;