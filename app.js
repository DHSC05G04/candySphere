const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require("morgan");
const session = require("express-session");

//Front end routes
const indexRouter = require('./routes/indexRoute');
const homeRouter = require('./routes/homeRoute');
const adminRouter = require('./routes/adminRoute');
const financeiroRouter = require('./routes/financeiroRoute');
const clientesRouter = require('./routes/clientesRoute');
const funcionariosRouter = require('./routes/funcionariosRoute');
const pdvRouter = require('./routes/pdvRoute');
const usuariosRoute = require('./routes/usuariosRoute');

//API routes
const estocaveisAPIRouter = require('./routes/apis/estocaveisRoute');
const receitasAPIRouter = require('./routes/apis/receitasRoute');
const produtosAPIRouter = require('./routes/apis/produtosRoute');
const pedidosAPIRouter = require('./routes/apis/pedidosRoute');
const funcionariosAPIRouter = require('./routes/apis/funcionariosRoute');
const usuariosAPIRouter = require('./routes/apis/usuariosRoute');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "343ji43j4n3jn4jk3n",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/admin', adminRouter);
app.use('/financeiro', financeiroRouter);
app.use('/clientes', clientesRouter);
app.use('/funcionarios', funcionariosRouter);
app.use('/pdv', pdvRouter);
app.use('/usuarios',usuariosRoute);

//API paths
app.use('/api/v0/estocaveis', estocaveisAPIRouter);
app.use('/api/v0/receitas', receitasAPIRouter);
app.use('/api/v0/produtos', produtosAPIRouter);
app.use('/api/v0/pedidos', pedidosAPIRouter);
app.use('/api/v0/funcionarios', funcionariosAPIRouter);
app.use('/api/v0/usuarios', usuariosAPIRouter);


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