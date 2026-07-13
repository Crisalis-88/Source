import { getWeather } from "../services/weather-api"
import { getTown } from "../services/town-api";
import getPostition from "../services/location"
import getSetsOfHours from "../utils/getHoursSets";
import getTimeByCity from "../services/city-time-api";

export let State = {
    location: null,
    weather: null,
    town: "",
    setsOfHours:[],
    forecastIdx:0,
    userCityTime: null,

    async update(location){

        if (location){
            this.location = location;
        }else{
            this.location = await getPostition();
        }
        
        try{
            this.userCityTime = await getTimeByCity(this.location);
            this.weather = await getWeather(this.location);
            this.town = await getTown(this.location);
        }catch (error){
            console.log(`update error: ${error}`)
        }
    }
};



