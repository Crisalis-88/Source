import { temp, conditionDescription, weatherIcon, precipRate } from "../services/weather-api.js";
import userTown from "../services/town-api.js";
import { renderIcon } from "../utils/icons.js";

// Number, String, String, Number -> Object(weather element)
// produce html element that represents current weather using the given weather data

export default function renderCurrentWeatherCard(){
    
    let currentIcon = renderIcon(weatherIcon, precipRate);
    const weatherEl = document.createElement("div");

    weatherEl.classList.add("weather-card", "flex", "flex-column");
    
    weatherEl.innerHTML = `
        <img class = "current-weather-icon mt-4" src="${currentIcon}" />
        <h2 class="temperature">${temp}</h2>
        <p class="card-text mt-2">${conditionDescription}</p>
    `;
    
    const townEl = document.createElement("p");

    townEl.className = "card-header";
    townEl.textContent = userTown;

    weatherEl.prepend(townEl);

    return weatherEl;
} 
