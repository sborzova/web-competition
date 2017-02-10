var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var multer = require("multer");

var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');
var usersRoutes = require('./routes/users');
var instanceRoutes = require('./routes/instance');
var paperRoutes = require('./routes/paper');
var solutionRoutes = require('./routes/solution');
var techniqueRoutes = require('./routes/technique');

var app = express();
mongoose.connect('mongodb://user:cervikcerv@ds151228.mlab.com:51228/database_bc');

//save admin if does not exist
var User = require('./models/user');
var emailAdmin = 'hanka@fi.muni.cz';

var user = new User({
    firstName: 'Hana',
    lastName: 'Rudová',
    password: bcrypt.hashSync('1234', 10),
    email: emailAdmin,
    roles: ['admin']
});

User.findOne({email: emailAdmin}, function(err, admin) {
    if (err)
      console.error(err);
    if (!admin){
        user.save(function(err, result) {
            if (err) {
                console.error(err);
            }
            console.log(result);
        });
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/', appRoutes);
app.use('/', userRoutes);
app.use('/', usersRoutes);
app.use('/', instanceRoutes);
app.use('/', paperRoutes);
app.use('/', solutionRoutes);
app.use('/', techniqueRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
