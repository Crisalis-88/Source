import { date } from "../utils/date";

// Number(date hours) -> Object(HTMLElement)
// produce HTMLElement that greets user (like: good morning, good afternoon or good evening) depending on current time

export default function renderGreeting(){

    let greetingEl = document.createElement("h2");

    switch(date){
        case date < 12:
            greetingEl.textContent = "Good Morning";
        case date > 12 && date < 16:
            greetingEl.textContent = "Good Afternoon";
        case date > 16 && date < 22:
            greetingEl.textContent = "Good Evening";
        default:
            greetingEl.textContent = "Good Night";
    }

    return greetingEl;
}