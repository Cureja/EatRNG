const spawn = require("child_process").spawn;

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;



app.use(express.static('pub'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile('index.html');
})



http.listen(port);



io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('locUpdate', function (latlong) {
        
        let pythonProcess = spawn('python',["test.py", latlong.lat, latlong.lon]);
        pythonProcess.stdout.on('data', (data) => {

            console.log(data.toString());
        });

    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});