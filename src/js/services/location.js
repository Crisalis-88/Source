const positionPromise = new Promise ((resolve, reject) => {navigator.geolocation.getCurrentPosition(resolve, reject, {enableHighAccuracy:true, timeout:9000})})

export function getPosition(){
  return positionPromise;
}

export const position = await getPosition();
