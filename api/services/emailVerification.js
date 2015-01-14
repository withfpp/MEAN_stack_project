var jwt = require('jwt-simple');
var config = require('./config.js');
var _ = require('underscore');
var fs = require('fs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var model = {
  verifyUrl: 'http://localhost:3000/auth/verifyEmail?token=',
  title: 'ang-node',
  subTitle: 'Thank you for signing up',
  body: 'You can verify your email by clicking the button below'
};

exports.send = function(email) {

  var payload = {
    sub: email
  }

  var token = jwt.encode(payload, config.EMAIL_SECRET);

  // var transporter = nodemailer.createTransport(smtpTransport({
  // }))
}


function getHtml(token){
  var path = './views/emailVerification.html';
  var html = fs.readFileSync(path, encoding = 'utf8');

  var template = _.template(html);

  model.verifyUrl += token;

  return template(model);
}

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};




