const searchBox = document.querySelector(".searchbar input");
const searchBtn = document.querySelector(".searchbar button");
const weatherDescription = document.querySelector(".weather-description");
const key = '6d957f45c9a1292bf9142157ffd43704';

async function checkWeather(cityName) {
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric';
    const response = await fetch(API_URL);
    const result = await response.json();
    console.log(result);

    document.querySelector(".city").innerHTML = result.name;
    document.querySelector(".temp").innerHTML = Math.round(result.main.temp) + "°C";
    document.querySelector(".humidity span").innerHTML = result.main.humidity + "%";
    document.querySelector(".wind span").innerHTML = result.wind.speed + "Km/h";
    weatherDescription.innerHTML = result.weather[0].main;
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});