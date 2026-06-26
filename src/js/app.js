import "../style.css";
import renderWeatherCard from "./components/WeatherCard.js";

let app = document.getElementById("app");

async function init (){
    
    let weatherEl = await renderWeatherCard();
    console.log(weatherEl)
    document.getElementById("weatherCard").append(weatherEl)
}

init();
