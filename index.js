const express = require('express');
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const port = process.env.PORT || 3333;

app.use(express.static('public'));

app.get('/test',(req,res)=>{
    res.send("This is a test message!")
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });

server.listen(port,()=>{
    console.log(`Server running on port: ${port}...`)
});