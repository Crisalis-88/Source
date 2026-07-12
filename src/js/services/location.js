const defaultLocation = "Moscow";

const maxAccuracy = 10000;

const options = {
    enableHighAccuracy:true,
    timeout:10000,
    maximumAge:10000,  
}

export default function getPosition(){ 
  return new Promise(
    (resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;

        console.log(position.coords.accuracy)
        if (position.coords.accuracy < maxAccuracy){
          console.log("its ok")
          resolve({"latitude": lat, "longitude":lon});
        }else{
          console.log("Accuracy is low, using default location")
          resolve(defaultLocation);
        }

      },

    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        console.warn("User denied location permission.", error);
      }

      console.log(defaultLocation)
      resolve(defaultLocation);
    },

    options)
  });
}

