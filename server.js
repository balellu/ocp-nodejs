var express = require('express'),
    fs = require('fs'),
    app = express();

var app = express();

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// app is running!
app.get('/', function(req, res) {
    console.log("Hey I am in Hello Node.js app");
    res.send('Hello from SARC NodeJS  at \n' + new Date());
});

app.listen(8080, ip);
module.exports = app;
