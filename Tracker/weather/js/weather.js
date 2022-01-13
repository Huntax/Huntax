const api = '30ee9ba68c73e395305d5e235d3895fe';

// lat lon is fetched from location.js file

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
            fetch(url)
                .then(res => {
                return res.json();
            })
            .then(body => {
                weatherData(body);
                displayWeather();
            })
        

var cityName = document.querySelector('.city');
var tempData = document.querySelector('.temp');
var weatherMain = document.querySelector('.weather-main');
var cityName = document.querySelector('.city');


function weatherData(){

}

function displayWeather(){
    
}