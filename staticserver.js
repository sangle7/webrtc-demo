var path = require('path')
var fs = require('fs')
var express = require('express')
var https = require('https')

var port = process.env.PORT || 3000;

var certOptions = {
    key: fs.readFileSync(path.resolve('cert/server.key')),
    cert: fs.readFileSync(path.resolve('cert/server.crt'))
}

var app = express()

var server = https.createServer(certOptions, app).listen(port)


app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});
