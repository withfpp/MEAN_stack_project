var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google');
var googleAuth = require('./services/googleAuth.js');
var facebookAuth = require('./services/facebookAuth.js');
var createSendToken = require('./services/jwt.js');
var LocalStrategy = require('./services/localStrategy.js');
var jobs = require('./services/jobs.js');
var find = require('./services/find.js');

var emailVerification = require('./services/emailVerification.js');

var app = express();

// bodyParser 이용해서 백엔드와 프론트엔드가 대화할 수 있게 해준다.
// bodyParser.json() 을 이용하면 백엔드 api가 json 형식으로 응답을 보내준다.
app.use(bodyParser.json());
app.use(passport.initialize());


passport.serializeUser(function(user, done){
  done(null, user.id);
})

// CORS
// 커스텀 미들웨어 이용해서 CORS 문제 해결
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


passport.use('local-register', LocalStrategy.register);
passport.use('local-login', LocalStrategy.login);

app.post('/register', passport.authenticate('local-register'), function(req, res){
  createSendToken(req.user, res);
})

app.get('/jobs', jobs);
app.get('/find', find);

app.post('/login', passport.authenticate('local-login'), function (req, res){
  createSendToken(req.user, res);
})

app.post('/auth/facebook', facebookAuth);
app.post('/auth/google', googleAuth);

mongoose.connect('mongodb://localhost/ang');

var server = app.listen(3000, function(){
  console.log('api listening on', server.address().port);
})