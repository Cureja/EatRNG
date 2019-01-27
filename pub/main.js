window.onload = function () {

    //connect to socket
    var socket = io();

    
    function getLocation() {
        if (navigator.geolocation) {
            console.log("sasdfasdf");
            navigator.geolocation.getCurrentPosition(function(loc) {
                console.log(loc);
                let temp = {
                    'lat': loc.coords.latitude,
                    'lon': loc.coords.longitude
                };
                socket.emit('locUpdate',temp);
            });
        }
    }
    
    getLocation();
}

