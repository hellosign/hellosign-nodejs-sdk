// System
var express = require('express');
var bodyParser = require('body-parser');

// HelloSign
var v3 = require('./lib/v3.spec.js');
var helpers = require('./lib/helpers.js');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.status(200).send('Welcome to the test server. Please access specific routes to use.');
});


console.log('Adding v3 endpoints...');

v3.tests.forEach(function(test){
  var baseUrl = '/v3'
  if (test.url) {
    helpers.addTestRouteToApp(test, app, baseUrl);
  }
});

// Catch everything else
app.route('*')
    .all(helpers.sendRouteNotFoundResponse);

app.listen('8080');
