
import { renderIcon } from "../utils/icons.js";
import { State } from "../stores/state.js";

// Number, String, String, Number -> Object(weather element)
// produce html element that represents current weather using the given weather data

export function renderCurrentWeatherCard(){
    
    let currentIcon = renderIcon(State.weather.currentConditions.icon, State.weather.currentConditions.precip);
    const weatherEl = document.createElement("div");

    let temp = State.weather.currentConditions.temp;
    let conditionDescription = State.weather.currentConditions.conditions;

    weatherEl.classList.add("weather-card", "flex", "flex-column", "align-center");
    
    weatherEl.innerHTML = `
        <img class = "current-weather-icon mt-4" src="${currentIcon}" />
        <h2 class="temperature mt-2">${temp}</h2>
        <p class="card-text">${conditionDescription}</p>
    `;
    
    const townEl = document.createElement("p");

    townEl.className = "card-header";
    townEl.textContent = State.town;

    weatherEl.prepend(townEl);

    return weatherEl;
} 
