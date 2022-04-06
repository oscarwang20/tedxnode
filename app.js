//main module

const http = require('http');
const fs = require('fs');
// event emitter
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//a listener
// => arrow function es6
logger.on('messageLogged', (arg) => {
    console.log('message logged', arg)
})

logger.log('new message');

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.write('Hello World');
        res.end();
    }
    if (req.url === "/eventlogger"){
        res.write("Event Tested");
        logger.log('event tested');
        res.end();
    }
    if (req.url === "/htmlfile"){
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
});


server.listen(3000);
console.log('Listening on port 3000');