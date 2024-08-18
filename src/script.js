function refreshWeather (response) {
    let temperatureElement = document.querySelector("#temperature");
 let temperature = response.data.temperature.current;
 let cityElement = document.querySelector("#city");
 let descriptionElement = document.querySelector("#description");
 let humidityElement = document.querySelector("#humidity");
 let windSpeedElement = document.querySelector("#wind-speed");
 let timeElement = document.querySelector("#time");
console.log(response.data);
let date = new Date(response.data.time*1000);
let icon = ` <img src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png"class ="my-temperature-app-icon"/>`;


 cityElement.innerHTML = response.data.city;
timeElement.innerHTML = `${date.getDay()}${date.getHours()}:${date.getMinutes()}`

 timeElement.innerHTML = formatDate(date);
 descriptionElement.innerHTML = response.data.condition.description;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
temperatureElement.innerHTML = Math.round(temperature);
}
function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    let day = days[date.getDay()];
     
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}



function searchCity(city) {
let apiKey = "5a3530d402b8t82b0332df19d81od2ad";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit(event){
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");


searchCity(searchInput.value);



}





let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Perth");