import location  from "./location.js";
import { makeWeatherURL } from "../utils/urls.js";

const unitGroup = "metric";
const contentType = 'json';
const API_KEY = import.meta.env.VITE_API_KEY;

let weatherData = await getWeather(location);

let condition = weatherData.condition;
export const hours = weatherData.day.hours;

console.log(weatherData);

export const temp = condition.temp;
export const conditionDescription = condition.conditions;
export const weatherIcon = condition.icon;
export const precipRate = condition.precip;

console.log(weatherIcon)
console.log("bebeb", condition)

async function fetchWeather(url){
  let res = await fetch(url);

  if (!res.ok){
    throw new Error("request to weather api has failed");
  }

  let data = await res.json();

  return {
    condition: data.currentConditions, 
    day: data.days[0],
  };
}

export async function getWeather(location){

  try {
    if (typeof location !== "object"){
      throw new Error("Failed to get user`s coords, using defaultLocation instead 2");
    }

    console.log(`Latitude: ${lat}, Longitude: ${lon}`);

    let url = makeWeatherUrl(location, unitGroup, API_KEY, contentType);

    return await fetchWeather(url)
  }

  catch(error){
    const url = makeWeatherURL(location, unitGroup, API_KEY, contentType)
    return await fetchWeather(url)
  }
}


