// System
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var morgan = require('morgan');

// HelloSign
var v3 = require('./lib/v3.spec');
var helpers = require('./lib/helpers');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multer({dest: './uploads/'}));
app.use(morgan('default'));

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

helpers.clearUploads();

var server = app.listen('8080');

server.on('connection', function(socket) {
  helpers.log("A new connection was made by a client.");
  socket.setTimeout(30 * 1000);
  // 30 second timeout. Change this as you see fit.
});
