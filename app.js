var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var compression = require('compression');

var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');
var instanceRoutes = require('./routes/instance');
var paperRoutes = require('./routes/paper');
var solutionRoutes = require('./routes/solution');
var preferenceRoutes = require('./routes/preference');
var emailRoutes = require('./routes/email');
var fileRoutes = require('./routes/file');

var app = express();

mongoose.Promise = require('bluebird');

var uri = 'mongodb://user:cervikcerv@ds151228.mlab.com:51228/database_bc';
// var uri = 'mongodb://user:' + process.env.MLAB_USER + '.mlab.com:' + process.env.MLAB_DATABASE;
mongoose.connect(uri);

/*
 *  Uncomment on first deploy on server
 */

// var ProfileUser = require('./models/user');
// var emailAdmin = 'hanka@fi.muni.cz';
//
// ProfileUser.findOne({email: emailAdmin}, function(err, admin) {
//     if (err)
//       console.error(err);
//     if (!admin){
//         var bcrypt = require('bcryptjs');
//         var user = new ProfileUser({
//             firstName: 'Hana',
//             lastName: 'Rudová',
//             password: bcrypt.hashSync('1234', 10),
//             email: emailAdmin,
//             role: 'admin'
//         });
//         user.save(function(err, result) {
//             if (err) {
//                 console.error(err);
//             }
//             console.log(result);
//         });
//     }
// });

// var Preference = require('./models/preference');
// var preferenceName = 'competitionIsOn';
// var preferenceDefault = new Preference({
//     name: preferenceName,
//     state: false
// });
//
// Preference.findOne({name: preferenceName}, function (err, preference) {
//     if (err)
//         console.error(err);
//     if (!preference){
//         preferenceDefault.save(function(err, result) {
//             if (err) {
//                 console.error(err);
//             }
//             console.log(result);
//         });
//     }
// });

app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/', appRoutes);
app.use('/', userRoutes);
app.use('/', instanceRoutes);
app.use('/', paperRoutes);
app.use('/', solutionRoutes);
app.use('/', preferenceRoutes);
app.use('/', emailRoutes);
app.use('/', fileRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
