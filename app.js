var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON;
var mongoose = require('mongoose');
mongoose.connect(connectionString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
    console.log("Connection to DB succeeded");
    recreateDB();
  });

var Tool = require('./models/tools');

async function recreateDB(){
    // Delete everything
    await Tool.deleteMany();

    let instance1 = new Tool({tool_type: "hammer", size: "large", cost: 15.99});
    await instance1.save();
    console.log("Seeded initial tool data");

    let instance2 = new Tool({tool_type: "screwdriver", size: "medium", cost: 8.50});
    await instance2.save();
    console.log("Seeded second tool data");

    let instance3 = new Tool({tool_type: "wrench", size: "small", cost: 12.00});
    await instance3.save();
    console.log("Seeded third tool data");
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var toolsRouter = require('./routes/tools');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tools', toolsRouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
