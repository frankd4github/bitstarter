var express = require('express');
var fs = require('fs');
var indexHtmlContent = fs.readFileSync('index.html').toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(indexHtmlContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});