let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentDay = days[date.getDay()];
let currentMonth = months[date.getMonth()];
let currentDate = date.getDate();
let currentYear = date.getFullYear();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let amPm = currentHour >= 12 ? "PM" : "AM";
currentHour = currentHour % 12 || 12;
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}

let now = document.querySelector("#date");
now.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear} ${currentHour}:${currentMinute} ${amPm}`;

// search for country & geolocation/weather api
function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function changeCity(city) {
  let apiKey = "97f8e93f00107773f88eafd933ce86b7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  changeCity(city);
}

function getLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "97f8e93f00107773f88eafd933ce86b7";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function showCurrentLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "97f8e93f00107773f88eafd933ce86b7";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
changeCity("Tunapuna");

// convert F to C
function convertToFarenheit(event) {
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = 66;
  let futureTemp = document.querySelectorAll(
    "#future-temp-1, #future-temp-2, #future-temp-3, #future-temp-4, #future-temp-5, #future-temp-6 ,#future-temp-7"
  );
  futureTemp.innerHTML = 66;
}
function convertToCelcius(event) {
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = 31;
  let futureTemp = document.querySelectorAll("#future-temp");
  futureTemp.innerHTML = 31;
}

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", convertToFarenheit);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", convertToCelcius);
