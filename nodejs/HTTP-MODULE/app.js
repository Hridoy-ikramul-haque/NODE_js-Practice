var http = require('http');
var fs = require('fs');





var requestHandler = function(request,response){
        // response.write('amk ki keu 5 taka debe');
        // response.end();
        // console.log(request.url);
        if(request.url == '/login'){
            // response.write('<h1>CONGO! LOGIN PAGE </h1>');
            // response.end();
            // var login = fs.readFileSync('login.html');
            // response.write(login.toString());
            // response.end();
            fs.createReadStream('login.html').pipe(response);
        }
        else if(request.url == '/home'){
            response.writeHead(100,{'content-type': 'text/plain'});
            response.write('<h1>CONGO! HOME PAGE </h1>');
            response.end();
        }
        else{
            response.write('<h1>INVALID </h1>');
            response.end();
        }
};

var server = http.createServer(requestHandler);

server.listen(4000);
console.log('server hoise open!');