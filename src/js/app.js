import "../style.css";
import { renderCurrentWeatherCard } from "./components/CurrentWeatherCard.js";
import renderForecastWeatherCard from "./components/ForecastWeatherCard.js";
import renderTownSearchBar from "./components/SerachBar.js";
import { State } from "./stores/state.js";


let app = document.getElementById("app");

export async function render(){

    document.getElementById("currentWeatherCard").replaceChildren(
        renderCurrentWeatherCard()
    )
    
    document.getElementById("forecastWeatherCard").replaceChildren(
        renderForecastWeatherCard()
    )
}

async function init (){

    renderTownSearchBar();

    await State.update();
    console.log(State.location)
    render();
    
    //let currentWeatherEl = renderCurrentWeatherCard();
    //console.log(currentWeatherEl);
    //document.getElementById("currentWeatherCard").append(currentWeatherEl);

    //displayForecastWeatherCard();
}

init();

let forecastWeatherEl;
export default function displayForecastWeatherCard(isDelete){
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

