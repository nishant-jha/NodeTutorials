var http = require("http");

function onRequest(request,response)
{
    console.log("user made a request with URL: "+request.url);
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.write("The data you requested is here....");
    response.end();
}


http.createServer(onRequest).listen(8888);
console.log("server has started......");
