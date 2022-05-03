//main module

const express = require('express');
const http = require('http');
const fs = require('fs'); 
// event emitter
const EventEmitter = require('events');

const app = express();

//a listener
// => arrow function es6

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/courses', (req, res) => {
    res.send([1,2,3]);
})

app.listen(3000);
console.log('Listening on port 3000');