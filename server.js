var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));

var server = app.listen('8000', function(){
  console.log('Listening on 8000...');
})