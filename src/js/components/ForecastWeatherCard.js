import { days } from "../services/weather-api";
import { renderIcon } from "../utils/icons.js";

// Array(days) -> Object(weatherEl)
// produce html weatherEl and fill it using the given forecast

export default function renderForecastWeatherCard(){
    let daysToShow = days.slice(1, 5);

    let forecastWeatherEl = document.createElement("ul");

    forecastWeatherEl.classList.add("flex", "flex-column", "gap-1");

    for (let day of daysToShow){
        forecastWeatherEl.innerHTML += `
        <div class="p-1 flex flex-row day">
            <img src="${renderIcon(day.icon, day.precip)}"/>
            <p>${day.temp}</p>
        </div>`;

        console.log(day.precip)
    };

    return forecastWeatherEl;
}