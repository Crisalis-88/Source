
import cloudyNight from "../../assets/cloudy-night-2.svg";
import clearDay from "../../assets/clear-day.svg";
import clearNight from "../../assets/clear-night.svg";
import cloudy from "../../assets/cloudy.svg";
import partlyCloudyDay from "../../assets/cloudy-day-1.svg";
import rainySmall from "../../assets/rainy-sm.svg";
import rainyMedium from "../../assets/rainy-md.svg"
import rainyStrong from "../../assets/rainy-lg.svg";

let icons;


export function renderIcon(weatherIcon, precip){

    if (weatherIcon == "partly-cloudy-night"){
        return cloudyNight
    }else if(weatherIcon == "clear-day"){
        return clearDay;
    }else if(weatherIcon == "cloudy"){
        return cloudy;
    }else if (weatherIcon == "partly-cloudy-day"){
        return partlyCloudyDay;
    }else if (weatherIcon == 'clear-night'){
        return clearNight;
    }else if(weatherIcon == "rain" && precip < 2.5){
        return rainySmall;
    }else if(weatherIcon == "rain" && precip < 7.5){
        return rainyMedium;
    }else if(weatherIcon == "rain" && precip > 7.5){
        return rainyStrong;
    }
}
