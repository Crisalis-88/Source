// import location from "./location.js";
import { makeWeatherURL } from "../utils/urls.js";

const unitGroup = "metric";
const contentType = 'json';
const API_KEY = import.meta.env.VITE_API_KEY;

// let weatherData = await getWeather(location);
// console.log(weatherData)

// let condition = weatherData.condition;
// export const hours = weatherData.day.hours;

// console.log(weatherData);

// export const temp = condition.temp;
// export const conditionDescription = condition.conditions;
// export const weatherIcon = condition.icon;
// export const precipRate = condition.precip;

// onsole.log(weatherIcon)
// console.log("bebeb", condition)

console.log("ergerg")

async function fetchWeather(url){
  let res = await fetch(url);

  if (!res.ok){
    throw new Error("request to weather api has failed");
  }

  let data = await res.json();

  return data;
}

export async function getWeather(location){

  try {
    if (typeof location !== "object"){
      throw new Error("Failed to get user`s coords, using defaultLocation instead 2");
    }

    console.log(`Latitude: ${lat}, Longitude: ${lon}`);

    let url = makeWeatherUrl(location, unitGroup, API_KEY, contentType);
    console.log("url:", url)

    return await fetchWeather(url)
  }

  catch(error){
<<<<<<< HEAD
    console.log("ergr")
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=${contentType}`;
=======
    const url = makeWeatherURL(location, unitGroup, API_KEY, contentType)
>>>>>>> 6043c21c8612b5bae906b3e3e48ab675090dca28
    return await fetchWeather(url)
  }
}


