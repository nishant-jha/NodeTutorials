var http =  require("http");
var fs =  require("fs");


function send404Response(response)
{
    response.writeHeader(404,{"Content-Type":"text/plain"});
    response.write("Error 404 : Sorry,the page you requested could not be found");
    response.end();
}

function onRequest(request,response)
{
    console.log("user connected to server...");
    if(request.method == "GET" && request.url == "/"){
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else
    {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("server created successfully");
