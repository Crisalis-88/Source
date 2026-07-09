import "../style.css";
import renderCurrentWeatherCard from "./components/CurrentWeatherCard.js";
import renderForecastWeatherCard from "./components/ForecastWeatherCard.js";
import setUptownSearchBar from "./components/SerachBar.js";

let app = document.getElementById("app");

async function init (){

    setUptownSearchBar();

    displayCurrentWeatherCard()
    
    displayForecastWeatherCard();
}

function displayCurrentWeatherCard(){
    let currentWeatherEl = weatherEl;
    console.log(currentWeatherEl);
    document.getElementById("currentWeatherCard").append(currentWeatherEl);
}

let forecastWeatherEl;
export function displayForecastWeatherCard(isDelete){
    if(isDelete){
        forecastWeatherEl.remove();
        forecastWeatherEl = renderForecastWeatherCard();
        console.log(forecastWeatherEl);
        document.getElementById("forecastWeatherCard").append(forecastWeatherEl);
    }else{
        forecastWeatherEl = renderForecastWeatherCard();
        console.log(forecastWeatherEl);
        document.getElementById("forecastWeatherCard").append(forecastWeatherEl);
    }
}


init();
