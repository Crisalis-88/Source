

export default async function getTimeByCity(cityName){
    try{
        const geoUrl = `https://open-meteo.com/${encodeURIComponent(cityName)}&count=1&language=en&format=json`;

        const response = await fetch(geoUrl);
        console.log(response)
        let data = await response.json();

        console.log(data)

        const timeZone = data.results[0].timezone;

         const exactLocalTime = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(new Date());

        return exactLocalTime;
    }catch(error){
        console.error(error)
    }
}
