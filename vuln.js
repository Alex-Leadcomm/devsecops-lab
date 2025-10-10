var express = require('express');
var app = express();
// Rota com vulnerabilidade de XSS
app.get('/', function(req, res) {
  res.send('<h1>Hello, ' + req.query.name + '</h1>');
});
app.listen(3000);
