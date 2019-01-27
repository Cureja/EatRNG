require('dotenv').config();
const spawn = require("child_process").spawn;
const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_API
});

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
        
        // let pythonProcess = spawn('python',[
        //     "test.py", 
        //     process.env.GOOGLE_API,
        //     latlong.lat, 
        //     latlong.lon]);
        
        // pythonProcess.stdout.on('data', (data) => {
        //     console.log(data.toString());
        // });

        googleMapsClient.placesNearby(
            {
                location: {
                    lat: latlong.lat,
                    lng: latlong.lon
                },
                radius: 1000,
                keyword: '-mexican food',
            }, function(err, response) {
                if (!err) {
                    
                    let result = response.json.results;
                    socket.emit('placesInfo', result);
                    // console.log(result[0].name);
                }
            }
        );

    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});