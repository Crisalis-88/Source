import { date } from "./date.js";

export default function getSetsOfHours(weather, userCityTime){
    let startHour = userCityTime;
    let endHour = userCityTime + 4;

    let setsOfHours = []

    while (true){
        setsOfHours.push(weather.days[0].hours.slice(startHour, endHour));
        
        if (endHour >= 24){
            break;
        }

        startHour += 4;
        endHour += 4;
    }

    return setsOfHours;
}