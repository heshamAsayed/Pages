// var loc = navigator.geolocation.getCurrentPosition(showLocation);
// const keyApi = '734d95d0fda441691934d8ea6c1d861d';
// let city = document.getElementById("city-name").value;
// console.log(city)


        // detect the location automatic 
// function showLocation(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const FindTheCityByCoords = f`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}`;

// }
// var latitude;
// var longitude;
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//         async function(position) {
//             latitude = await position.coords.latitude;
//             longitude = await position.coords.longitude;
//             console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//         },
//         function(error) {
//             console.error(`Error Code = ${error.code} - ${error.message}`);
//         }
//     );
// } else {
//     console.error("Geolocation is not supported by this browser.");
// }   


// var longitude = 0;
// navigator.geolocation.getCurrentPosition(
//     async function(position) {
//         var latitude = await  position.coords.latitude;
//          longitude = await position.coords.longitude;
//         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//         console.log(longitude);
//     },
//     function(error) {
//         console.error(`Error Code = ${error.code} - ${error.message}`);
//     }
    
// );

// console.log(longitude);             // excute before the navigator.geolocation.getCurrentPosition() function



// (async function (keyApi='734d95d0fda441691934d8ea6c1d861d') {
//     const SearchTheCityByName = `https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=${keyApi}&units=metric`
//     try{
//         // const respose = await fetch(url +f`q=${cityname}&appid=${keyApi}&units=metric`)
//         const response = await fetch(SearchTheCityByName);        
//         const jsonfile = await response.json();
//         console.log(jsonfile);
//             document.querySelector(".city").innerHTML = jsonfile.name;
//             document.querySelector(".temp").innerHTML = Math.round(jsonfile.main.temp  )+ '&#8451;';
//             document.querySelector(".wind").innerHTML = jsonfile.wind.speed + 'km/h';
//             document.querySelector(".humidity").innerHTML = jsonfile.main.humidity + ' %';
//             let picturePhoto = jsonfile.weather[0].main + '.png'
//             document.querySelector(".image").src = 'images/' +picturePhoto;
//             // console.log(jsonfile)
//     }
//     catch (error) {
//         console.error(error.message);
//     }

// })()



(async function (keyApi='734d95d0fda441691934d8ea6c1d861d') {


    navigator.geolocation.getCurrentPosition(
        async function(position) {
            var lat = await  position.coords.latitude;
            var lon = await position.coords.longitude;
    const SearchTheCityByName = `https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=${keyApi}&units=metric`
    try{
        // const respose = await fetch(url +f`q=${cityname}&appid=${keyApi}&units=metric`)
        const response = await fetch(SearchTheCityByName);        
        const jsonfile = await response.json();
        console.log(jsonfile);
            document.querySelector(".city").innerHTML = jsonfile.name;
            document.querySelector(".temp").innerHTML = Math.round(jsonfile.main.temp  )+ '&#8451;';
            document.querySelector(".wind").innerHTML = jsonfile.wind.speed + 'km/h';
            document.querySelector(".humidity").innerHTML = jsonfile.main.humidity + ' %';
            let picturePhoto = jsonfile.weather[0].main + '.png'
            document.querySelector(".image").src = 'images/' +picturePhoto;
            // console.log(jsonfile)
    }
    catch (error) {
        console.error(error.message);
    }
},
function(error) {
    console.error(`Error Code = ${error.code} - ${error.message}`);
}

);


})()





function cityname(){
    var city = document.getElementById("city-name").value.trim();
    console.log(city)
    if(city==""){
        alert("enter the city name!");
        return 0 ;
        
    }
    getData(city,'734d95d0fda441691934d8ea6c1d861d');
}






// async function getData(city,keyApi) {
//     const url = "https://api.openweathermap.org/data/2.5/weather?"
//     const SearchTheCityByName = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric`
//     try{
//         // const respose = await fetch(url +f`q=${cityname}&appid=${keyApi}&units=metric`)
//         const response = await fetch(SearchTheCityByName);
//         if(!response.ok){
//             console.log("done!");
//         }
        
//         const json = await response.json();
//         console.log(json);
//     }
//     catch (error) {
//               console.error(error.message);
//             }

//             document.querySelector(".city").innerHTML = response.name;
//             document.querySelector('.temp').innerHTML = response.main.temp;
// }



async function getData(city,keyApi) {
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric`
    const resp = await fetch(url);
    const data = await resp.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp  )+ '&#8451;';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';
    document.querySelector(".humidity").innerHTML = data.main.humidity + ' %';
    let picturePhoto = data.weather[0].main + '.png'
    document.querySelector(".image").src = 'images/' +picturePhoto;
    console.log(data)
}












// function getCityAndCountry(location) {
//     var components = {};
//     for(var i = 0; i < location.address_components.length; i++) {
//       components[location.address_components[i].types[0]] = location.address_components[i].long_name;
//     }
  
//     if(!components['country']) {
//       console.warn('Couldn\'t extract country');
//       return false;
//     }
  
//     if(components['locality']) {
//       return [components['locality'], components['countrya
//     } else if(components['administrative_area_level_1']) {
//       return [components['administrative_area_level_1'], components['country']];
//     } else {
//       console.warn('Couldn\'t extract city');
//       return false;
//     }
//   }