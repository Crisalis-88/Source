import getWeather from "../services/weather-api.js"
import getTown from "../services/town-api.js";
import { position } from "../services/location.js";

import cloudyNight from "../../assets/cloudy-night-2.svg"
import clearDay from "../../assets/clear-day.svg";
import cloudy from "../../assets/cloudy.svg"
import partlyCloudyDay from "../../assets/cloudy-day-1.svg";

export default async function renderWeatherCard(){
    const weather = await getWeather(position);
    const town = await getTown(position);

    console.log(weather);

    let currentIcon = renderIcon(weather)

    let temp = weather.currentConditions.temp;
    let conditionDescription = weather.currentConditions.conditions;
    
    const weatherEl = document.createElement("div");

    weatherEl.classList.add("weather-card", "flex", "flex-column");
    
    weatherEl.innerHTML = `
        <img class = "weather-icon mt-4" src="${currentIcon}" />
        <h2 class="temperature">${temp}</h2>
        <p class="card-text">${conditionDescription}</p>
    `
    
    const townEl = document.createElement("p");

    townEl.className = "card-header";
    townEl.textContent = town.locality ?? town;

    weatherEl.prepend(townEl);

    return weatherEl;
} 

function renderIcon(weather){
    let currentWeatherIcon = weather.currentConditions.icon;

    switch (currentWeatherIcon){
        case "partly-cloudy-night":
             return cloudyNight;
        case "clear-day":
            return clearDay;
        case "cloudy":
            return cloudy;
        case "partly-cloudy-day":
            return partlyCloudyDay;
    }
}
