
import cloudyNight from "../../assets/cloudy-night-2.svg";
import clearDay from "../../assets/clear-day.svg";
import clearNight from "../../assets/clear-night.svg";
import cloudy from "../../assets/cloudy.svg";
import partlyCloudyDay from "../../assets/cloudy-day-1.svg";
import rainySmall from "../../assets/rainy-sm.svg";
import rainyMedium from "../../assets/rainy-md.svg"
import rainyStrong from "../../assets/rainy-lg.svg";

export function renderIcon(weatherIcon, precip){

    // rendering icons that need only weatherIcon property
    switch (weatherIcon){
        case "partly-cloudy-day":
            return partlyCloudyDay;
        case "partly-cloudy-night":
            return cloudyNight;
        case "clear-day":
            return clearDay;
        case "cloudy":
            return cloudy;
        case "clear-night":
            return clearNight;
    }

    // render icons that need weahterIcon and preciption rate
    if(weatherIcon == "rain" && precip < 2.5){
        return rainySmall;
    }else if(weatherIcon == "rain" && precip < 7.5){
        return rainyMedium;
    }else if(weatherIcon == "rain" && precip >= 7.5){
        return rainyStrong;
    }

}
