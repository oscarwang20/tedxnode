const EventEmitter = require('events');

var url =  'http://mylogger'

class Logger extends EventEmitter {
    log(message){
        //send an http request
        console.log(message);

        //signal that an event has happened
        this.emit('messageLogged', {id: 1, url: 'http://' });
    }
}

module.exports = Logger;
