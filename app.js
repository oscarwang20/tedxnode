//loading in http,url and filesystem module. 
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
    //var addy = url.parse(req.url)
    if (req.url === "/"){
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data); 
            return res.end();
        });
    }
    if (req.url === "/eventlogger"){
        res.write("Event Tested");
        logger.log('event tested');
        res.end();
    }
    if (req.url == "/whatisnode"){
        fs.readFile('whatisnode.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    if (req.url === "/htmlfile"){
        fs.readFile('windowobject.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
});


server.listen(5000);
console.log('Listening on port 5000');