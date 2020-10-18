var http = require('http');
var fs = require('fs');


function error_404(response){
    response.writeHead(404, {'Content-Type':"text/plain"});
    response.write("TEST: 404 Error.");
    response.end();
}

function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        fs.createReadStream("../client/userinfo.html").pipe(response);
    } else {
        response.writeHead(404,{'Content-Type':'text/plain'});
        response.write(request.method);
        response.write(request.url);
	response.end();
    }
}

http.createServer(onRequest).listen(80,'10.41.19.150');
