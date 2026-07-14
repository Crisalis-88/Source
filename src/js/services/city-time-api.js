import fetchAbortTimeout from "../utils/fetchAbortSignal";

const API_KEY = import.meta.env.VITE_API_KEY_CITY;

export default async function getTimeByCity(cityName){
    try{
        const geoUrl = `https://timezone.abstractapi.com/v1/current_time/?api_key=${API_KEY}&location=${cityName}`;

        const response = await fetch(geoUrl, fetchAbortTimeout);

        let data = await response.json();
        console.log("timeaoze.abstractapi:", data);

        let exactLocalTime = data.datetime.split(" ")[-1];

        return exactLocalTime;
    }catch(error){
        if (error.name === "TimeoutError"){
            console.error("timezone.abstractapi.com request timed out");
        }
        console.error(error);
    }
}
