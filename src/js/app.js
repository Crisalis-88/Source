import "../style.css";
import { renderCurrentWeatherCard } from "./components/CurrentWeatherCard.js";
import renderForecastWeatherCard from "./components/ForecastWeatherCard.js";
import renderTownSearchBar from "./components/SerachBar.js";
import renderGreeting from "./components/Greeting.js";
import { State } from "./stores/state.js";

let app = document.getElementById("app");

export async function render(){

    document.getElementById("currentWeatherCard").replaceChildren(
        renderCurrentWeatherCard()
    )
    
    document.getElementById("forecastWeatherCard").replaceChildren(
        renderForecastWeatherCard(() => {
            render()
        })
    )
}

async function init (){
    console.log("ddd")
    await State.update();
    console.log("ddd")
    render();
    
    document.querySelector(".header").prepend(renderGreeting());

    renderTownSearchBar(async (town) => {
        await State.update(town);
        render();
    });
}

init();