
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var base64ToImage = require('base64-to-image');

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

io.on('connection', function(socket) {
   console.log('A user connected');
   socket.on('image',(data)=>{
   	var base64Str = data;
   	console.log(data);
    var path ='uploadIMG/'; 
    var optionalObj = {'fileName': 'ssss', 'type':'png'};
    base64ToImage(base64Str,path,optionalObj); 
   })
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});