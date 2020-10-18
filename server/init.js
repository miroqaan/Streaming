var http = require('http');

function error_404(response){
    response.writeHead(404, {'Content-Type':"text/plain"});
    response.write("404 Error");
    response.end();
}

function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '\n') {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.createReadStream("../client/userinfo.html").pipe(response);
    } else {
        error_404(response);
    }
}

http.createServer(onRequest).listen(80,'10.41.19.150');