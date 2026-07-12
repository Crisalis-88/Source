import { State } from "../stores/state.js"
import { render } from "../app.js";
import { renderIcon } from "../utils/icons.js";

import displayForecastWeatherCard from "../app.js";

// Array(hours) -> Object(weather element)
// produce html weather element and fill it using the given forecast
export default function renderForecastWeatherCard(){
    let dayHours = State.setsOfHours[State.forecastIdx];
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

    if (State.forecastIdx >= State.setsOfHours.length - 1){
        State.forecastIdx = 0
    }else{
        State.forecastIdx++;
    }


    render();
}
