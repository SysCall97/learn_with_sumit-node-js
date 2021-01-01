const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write("Yoo!");
        res.write("buddy!");
    } else if(req.url === '/about') {
        res.write("This is mashry");
    } else {
        res.write("Not found");
    }
    res.end();

});

server.listen(3600);

console.log("Server created on port 3600");