const positionPromise = new Promise ((resolve, reject) => {navigator.geolocation.getCurrentPosition(resolve, reject, {enableHighAccuracy:true, timeout:15000, maximumAge:0})})

function getPosition(){
  return positionPromise;
}

export const position = await getPosition();
console.log(position.coords.accuracy)
