import { getWeather } from "../services/weather-api";
import { State } from "../stores/state.js"
import { render } from "../app.js";

const townForm = document.getElementById("townForm");
const townSearch = document.getElementById("townSearch");
const townSearchIcon = document.getElementById("townSerachIcon");

export default function setUptownSearchBar(){
    townSearch.addEventListener('focusin', async (event) => {
        townSearchIcon.style.display = "none"
    });

    townSearch.addEventListener("focusout", () => {
        console.log("serach");
        townSearchIcon.style.display = "block"
    })

    townSearch.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log(townSearch.value);
        await State.update(townSearch.value);
        render()
    })
}