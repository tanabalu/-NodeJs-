const http = require('http');

function start() {
    function onRequest(request, response) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write('Hello World!');
        response.end();
    }

    http.createServer(onRequest).listen(3000);
    console.log('Server has started.');
}

exports.start = start;