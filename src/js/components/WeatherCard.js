import getWeather from "../services/weather-api.js"
import getTown from "../services/town-api.js";
import { position } from "../services/location.js";

export default async function renderWeatherCard(){
    const weather = await getWeather(position);
    const town = await getTown(position);

    let temp = weather.currentConditions.temp;
    let conditionDescription = weather.currentConditions.conditions;
    
    const weatherEl = document.createElement("div");

    weatherEl.classList.add("weather");

    const townEl = document.createElement("div");

    if (town.locality){
        townEl.innerHTML = `<p class="card-header">${town.locality}</p>`
    }else{
        townEl.innerHTML = `<p class="card-header">${town}</p>`
    }

    let imgUrl = "../../assets/day.svg"

    weatherEl.innerHTML = `
        ${townEl.innerHTML}
        <img src="${imgUrl}" />
        <h2 class="temperature">${temp}</h2>
        <p class="card-header">${conditionDescription}</p>
    `
    return weatherEl;
}
