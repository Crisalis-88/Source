<<<<<<< HEAD
import { getWeather } from "../services/weather-api";
import { State } from "../stores/state.js"
import { render } from "../app.js";
=======
import { conditionDescription, getWeather } from "../services/weather-api";
>>>>>>> 6043c21c8612b5bae906b3e3e48ab675090dca28

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

<<<<<<< HEAD
    townSearch.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log(townSearch.value);
        await State.update(townSearch.value);
        render()
=======
    townForm.addEventListener("submit", async (event) => {
        event.preventDefault()
        let data = await getWeather(townSearch.value);
>>>>>>> 6043c21c8612b5bae906b3e3e48ab675090dca28
    })
}