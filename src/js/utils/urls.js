
export function makeTownURL(){
    let lat = location.latitude;
    let lon = location.longitude;

    return `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
}

export function makeWeatherURL(location, unitGroup, API_KEY, contentType){
<<<<<<< HEAD
    console.log(location)
=======

    if (typeof location != 'object'){
        return`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=${contentType}`;
    }

>>>>>>> 6043c21c8612b5bae906b3e3e48ab675090dca28
    let lat = location.latitude;
    let lon = location.longitude;

    console.log(lat, lon);

    console.log(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=${contentType}`)
    
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=${contentType}`;
}