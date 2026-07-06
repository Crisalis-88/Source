
export function makeTownURL(location){
    let lat = location.latitude;
    let lon = location.longitude;

    return `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
}

export function makeWeatherURL(location, unitGroup, API_KEY, contentType){
    let lat = location.latitude;
    let lon = location.longitude;
    
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=${contentType}`;
}