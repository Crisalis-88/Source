
export function makeTownURL(){
    let lat = location.latitude;
    let lon = location.longitude;

    return `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
}

export function makeWeatherURL(location, unitGroup, API_KEY, contentType){
    console.log(location)
    let lat = location.latitude;
    let lon = location.longitude;

    console.log(lat, lon);

    console.log(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=${contentType}`)
    
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=${contentType}`;
}