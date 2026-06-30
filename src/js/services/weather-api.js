
export const defaultLocation = "Moscow";
const unitGroup = "metric";
const contentType = 'json';
const API_KEY = import.meta.env.VITE_API_KEY;


async function fetchWeather(url){
  let res = await fetch(url);

  if (!res.ok){
    throw new Error("request to weather api has failed");
  }

  let data = await res.json()
  return data
}

export default async function getWeather(position){

  try {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=${contentType}`;

    return await fetchWeather(url)
  }

  catch(error){
    //console.error("Permission denied", error.message);
    if (error.code === error.PERMISSION_DENIED) {
      console.log("User denied location permission.", error);
    }

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${defaultLocation}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=${contentType}`;
    return await fetchWeather(url)
  }
}


