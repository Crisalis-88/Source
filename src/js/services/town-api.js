import { defaultLocation } from "./weather-api";
import { position } from "./location";

export default async function getTown(position){
    let url;
    console.log(defaultLocation)
    
    try{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
    
        url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
    
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
    
        return data;
    }catch(error){
        console.error("error:", error)
        console.log(defaultLocation)
        return defaultLocation;
    }
    
    
    // if (localStorage.getItem("lat") || localStorage.getItem("lon")){
    //     localStorage.setItem("lat", lat);
    //     localStorage.setItem("lon", lon);

    //     console.log("gg")
    // }

    //  console.log(localStorage.getItem("lat"), localStorage.getItem("lon"))

}