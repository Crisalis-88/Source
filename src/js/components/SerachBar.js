import { conditionDescription, getWeather } from "../services/weather-api";

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

    townForm.addEventListener("submit", async (event) => {
        event.preventDefault()
        let data = await getWeather(townSearch.value);
    })
}