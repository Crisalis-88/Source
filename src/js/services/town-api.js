import fetchAbortTimeout from "../utils/fetchAbortSignal.js";
import { makeTownURL } from "../utils/urls.js"

export async function getTown(location){
    
    try{
        if (typeof location !== "object"){
            throw new Error("location in not an object");
        }

        let url = makeTownURL(location);

        const res = await fetch(url, fetchAbortTimeout);

        if (!res.ok){
            throw new Error("Failed to fetch user`s town");
        }
        
        const data = await res.json();
        console.log(data);
    
        return data.locality;
    }
    catch(error){
        if (error.name === "TimeoutError"){
            console.error("timezone.abstractapi.com request timed out");
        }
        console.error(error);
        console.log("catch block", location);
        return location;
    }
    
    
    // if (localStorage.getItem("lat") || localStorage.getItem("lon")){
    //     localStorage.setItem("lat", lat);
    //     localStorage.setItem("lon", lon);

    //     console.log("gg")
    // }

    //  console.log(localStorage.getItem("lat"), localStorage.getItem("lon"))
}