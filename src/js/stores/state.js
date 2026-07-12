import { getWeather } from "../services/weather-api"
import { getTown } from "../services/town-api";
import getPostition from "../services/location"
import getSetsOfHours from "../utils/getHoursSets";

export let State = {
    location: null,
    weather: null,
    town: "",
    setsOfHours:[],
    forecastIdx:0,

    async update(location){
        try{
            this.location = await getPostition();
            this.weather = await getWeather(this.location);
            this.town = await getTown(this.location);
            this.setsOfHours = getSetsOfHours(this);
        }catch (error){
            console.log(`update error: ${error}`)
        }
    }
};



