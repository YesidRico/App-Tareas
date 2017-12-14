const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const rutas = require('./routes');

app.use(express.static(__dirname + '/public/views'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', rutas);

module.exports = app;


