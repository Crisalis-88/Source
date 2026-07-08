import { getWeather } from "../services/weather-api";

const townSearch = document.getElementById("townSearch");
const townSearchIcon = document.getElementById("townSerachIcon");

export default function renderTownSearchBar(){
    townSearch.addEventListener('focusin', (event) => {
        console.log("serach");
        townSearchIcon.style.display = "none"
    });

    townSearch.addEventListener("focusout", () => {
        console.log("serach");
        townSearchIcon.style.display = "block"
    })

    townSearch.addEventListener("submit", async () => {
        let data = await getWeather()
        console.log(data, "sdrg")
    })
}