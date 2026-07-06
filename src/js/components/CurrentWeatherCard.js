import { temp, conditionDescription, weatherIcon, precipRate } from "../services/weather-api.js";
import userTown from "../services/town-api.js";
import { renderIcon } from "../utils/icons.js";

export default function renderCurrentWeatherCard(){
    
    let currentIcon = renderIcon(weatherIcon, precipRate);
    const weatherEl = document.createElement("div");

    weatherEl.classList.add("weather-card", "flex", "flex-column");
    
    weatherEl.innerHTML = `
        <img class = "weather-icon mt-4" src="${currentIcon}" />
        <h2 class="temperature">${temp}</h2>
        <p class="card-text mt-2">${conditionDescription}</p>
    `;
    
    const townEl = document.createElement("p");

    townEl.className = "card-header";
    townEl.textContent = userTown;

    weatherEl.prepend(townEl);

    return weatherEl;
} 
