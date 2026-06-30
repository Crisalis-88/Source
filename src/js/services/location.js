
const maxAccuracy = 31000;


const options = {
    timeout:14000,
    maximumAge:10000,  
}

export const position = await getAccuratePos();
console.log(position.coords.accuracy)

function getAccuratePos(){
  return new Promise((resolve, reject) => {
    let id = navigator.geolocation.watchPosition(
      (position) => {
        let acc = position.coords.accuracy
        console.log(acc)
      
        if (acc <= maxAccuracy){
          navigator.geolocation.clearWatch(id);
          resolve(position);
        }
      },

      (error) => {reject(error); console.log("fuck")},
      options
    )
    }
  )
}