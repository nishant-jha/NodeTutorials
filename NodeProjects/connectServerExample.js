var connect = require('connect');
var http = require('http');

var app = connect();

app.use('/profile',profile);
app.use('/forum',forum);

function profile(request,response)
{
    console.log("User requested profile URL");
}

function forum(request,response)
{
    console.log("User requested forum URL");
}

http.createServer(app).listen(8888);
console.log("server started......");