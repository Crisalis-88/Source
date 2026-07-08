import { hours } from "../services/weather-api";
import { renderIcon } from "../utils/icons.js";
import date from "../utils/date.js";

import displayForecastWeatherCard from "../app.js";

let setsOfHours = getSetsOfHours();
let setsOfHoursIdx = 0;

// Array(hours) -> Object(weather element)
// produce html weather element and fill it using the given forecast
export default function renderForecastWeatherCard(){
    let dayHours = setsOfHours[setsOfHoursIdx];
    console.log(dayHours)

    let forecastWeatherEl = document.createElement("ul");

    forecastWeatherEl.addEventListener("click", (event) => {

        handleClick();
        forecastWeatherEl.removeEventListener("click", this);
    })

    forecastWeatherEl.classList.add("flex", "flex-row", "gap-1");

    for (let hour of dayHours){

        forecastWeatherEl.innerHTML += `
        <div style="width:100%" class="day">
            <div class="flex flex-row nowrap gap-1">
                <img style="width:3rem; height:3rem" src="${renderIcon(hour.icon, hour.precip)}"/>
                <p class="secondary-text">${hour.datetime.slice(0,5)}</p>
            <div>
            <p class = "secondary-text" style="font-size:var(--font-size-xl)">${hour.temp}°</p>
        </div>`;
    };

    return forecastWeatherEl;
}

function handleClick(){

    if (setsOfHoursIdx >= setsOfHours.length - 1){
        setsOfHoursIdx = 0
    }else{
        setsOfHoursIdx++;
    }


    displayForecastWeatherCard(true);

}

function getSetsOfHours(){
    let startHour = date;
    let endHour = date + 4;


    let setsOfHours = []

    while (true){
        setsOfHours.push(hours.slice(startHour, endHour));
        
        if (endHour >= 24){
            break;
        }
        startHour += 4;
        endHour += 4;
    }

    return setsOfHours;
}