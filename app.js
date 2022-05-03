// loading in our own module
const log = require('./log');

//loading in http,url and filesystem module. 
const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const urlObject = url.parse(req.url, true);
    const filename = "." + urlObject.pathname + ".html";

    fs.readFile(filename, (err, data) => {
        
        if (err){
            if (req.url === "/"){
                fs.readFile('index.html', function(err, data){
                    if (err){
                        res.writeHead(404, {'Content-Type': 'text/html'});
                        res.write("404, not found"); 
                        return res.end('404');
                    }
                    else {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data); 
                        return res.end();
                    }
                });
            }
            if (req.url == "/modules"){
                fs.readFile('nodemodules.html', function(err, data){
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    return res.end();
                });
            }
            if (req.url === "/globalobject"){
                fs.readFile('windowobject.html', function(err, data){
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    return res.end();
                });
            }

            if (req.url === "/log"){
                res.write("Event Tested");
                //using our own module called log
                log('log success');
                res.end();
            }
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
});


server.listen(5000);
console.log('Listening on port 5000');