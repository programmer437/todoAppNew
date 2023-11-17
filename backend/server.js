var express = require('express');
var app = express();
var dotenv = require('dotenv');
dotenv.config();

app.get('/', function(req, res) {
    res.send('Hello World');
    });

app.listen(process.env.PORT, function() {
    console.log(`Listening on port ${process.env.PORT}`);
    }
);
