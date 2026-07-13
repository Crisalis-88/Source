let time = new Date()

export function getHoursDifference(timeZone){
    hoursDifference = time.getTimezoneOffset() / 60;

}

export let date = time.getHours();
console.log("current hour: ", date)
