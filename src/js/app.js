import "../style.css";
import renderCurrentWeatherCard from "./components/CurrentWeatherCard.js";
import renderForecastWeatherCard from "./components/ForecastWeatherCard.js";

let app = document.getElementById("app");

async function init (){
    
    let currentWeatherEl = renderCurrentWeatherCard();
    console.log(currentWeatherEl);
    document.getElementById("currentWeatherCard").append(currentWeatherEl);

    let forecastWeatherEl = renderForecastWeatherCard();
    console.log(forecastWeatherEl);
    document.getElementById("forecastWeatherCard").append(forecastWeatherEl);
}

init();
