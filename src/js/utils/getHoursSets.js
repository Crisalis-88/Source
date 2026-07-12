import date from "./date.js";


export default function getSetsOfHours(State){
    let startHour = date;
    let endHour = date + 4;


    let setsOfHours = []

    while (true){
        setsOfHours.push(State.weather.days[0].hours.slice(startHour, endHour));
        
        if (endHour >= 24){
            break;
        }
        startHour += 4;
        endHour += 4;
    }

    return setsOfHours;
}