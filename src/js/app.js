import "../style.css";
import { renderCurrentWeatherCard } from "./components/CurrentWeatherCard.js";
import renderForecastWeatherCard from "./components/ForecastWeatherCard.js";
<<<<<<< HEAD
import renderTownSearchBar from "./components/SerachBar.js";
import { State } from "./stores/state.js";

=======
import setUptownSearchBar from "./components/SerachBar.js";
>>>>>>> 6043c21c8612b5bae906b3e3e48ab675090dca28

let app = document.getElementById("app");

export async function render(){

    document.getElementById("currentWeatherCard").replaceChildren(
        renderCurrentWeatherCard()
    )
    
    document.getElementById("forecastWeatherCard").replaceChildren(
        renderForecastWeatherCard()
    )
}

async function init (){

<<<<<<< HEAD
    renderTownSearchBar();

    await State.update();
    console.log(State.location)
    render();
    
    //let currentWeatherEl = renderCurrentWeatherCard();
    //console.log(currentWeatherEl);
    //document.getElementById("currentWeatherCard").append(currentWeatherEl);

    //displayForecastWeatherCard();
}

init();
=======
    setUptownSearchBar();

    displayCurrentWeatherCard()
    
    displayForecastWeatherCard();
}

function displayCurrentWeatherCard(){
    let currentWeatherEl = weatherEl;
    console.log(currentWeatherEl);
    document.getElementById("currentWeatherCard").append(currentWeatherEl);
}
>>>>>>> 6043c21c8612b5bae906b3e3e48ab675090dca28

let forecastWeatherEl;
export function displayForecastWeatherCard(isDelete){
    if(isDelete){
        forecastWeatherEl.remove();
        forecastWeatherEl = renderForecastWeatherCard();
        console.log(forecastWeatherEl);
        document.getElementById("forecastWeatherCard").append(forecastWeatherEl);
    }else{
        forecastWeatherEl = renderForecastWeatherCard();
        console.log(forecastWeatherEl);
        document.getElementById("forecastWeatherCard").append(forecastWeatherEl);
    }
}

<<<<<<< HEAD
=======

init();
>>>>>>> 6043c21c8612b5bae906b3e3e48ab675090dca28
