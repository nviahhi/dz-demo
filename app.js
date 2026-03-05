function getCurrentPosition() {
    return new Promise((resolve) => { 
        navigator.geolocation.getCurrentPosition((position) => {
          resolve ({latitude: position.coords.latitude , longitude: position.coords.longitude});
        });
    });
}

 getCurrentPosition().then((data) =>  console.log(data)).catch((err) => console.error(err));
