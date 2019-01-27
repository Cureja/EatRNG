window.onload = function () {

    //connect to socket
    var socket = io();

    
    function getLocation() {
        if (navigator.geolocation) {
            console.log("sasdfasdf");
            navigator.geolocation.getCurrentPosition(function(loc) {
                let latlong = {
                    'lat': loc.coords.latitude,
                    'lon': loc.coords.longitude
                };
                socket.emit('locUpdate',latlong);
            });
        }
    }
    
    getLocation();
}

