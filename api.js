'use strict';
const express = require('express');
var app = module.exports = express();


var db = [];


app.post('/', function (req, res) {
    db.push({
        title: req.body.title,
        done: false
    });
    let todoID = db.length - 1;
  
    res.location(app.mountpath + todoID);
    res.status(201).end();
});


app.put('/', function (req, res) {
    db[req.body.id] = req.body;
    res.location('/' + req.body.id);
    res.status(204).end();
});
