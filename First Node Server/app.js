const http=require('http');

function eventListener(req,res){
    console.log(req);
}

const server=http.createServer(eventListener)
server.listen(3000);