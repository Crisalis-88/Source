
const API_KEY = import.meta.env.VITE_API_KEY_CITY;

export default async function getTimeByCity(cityName){
    try{
        const geoUrl = `https://timezone.abstractapi.com/v1/current_time/?api_key=${API_KEY}&location=${cityName}`;

        const response = await fetch(geoUrl);
        let data = await response.json();
        console.log("timeaoze.abstractapi:", data);

        let exactLocalTime = data.datetime.split(" ")[-1];

        return exactLocalTime;
    }catch(error){
        console.error(error);
    }
}
