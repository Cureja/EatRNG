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
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile('index.html');
})

http.listen(port);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('submit', function (obj) {
        
        // let pythonProcess = spawn('python',[
        //     "test.py", 
        //     process.env.GOOGLE_API,
        //     latlong.lat, 
        //     latlong.lon]);
        
        // pythonProcess.stdout.on('data', (data) => {
        //     console.log(data.toString());
        // });
        
        if (obj.latlong != null) {
            googleMapsClient.placesNearby(
                {
                    location: {
                        lat: obj.latlong.lat,
                        lng: obj.latlong.lon
                    },
                    radius: obj.dis,
                    keyword: "food",
                    opennow: true,
                    maxprice: obj.price
                }, function(err, response) {
                    if (!err) {
                        
                        let result = response.json.results;
                        socket.emit('placesInfo', result);
                        // console.log(result[0].name);
                    }
                }
            );

        }


    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});