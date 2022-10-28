function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);

  let city = response.data.name;
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = temperature + "°c";
}
function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city-input");
  let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
  let city = cityInput.value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  let h2 = document.querySelector("h2");
  h2.innerHTML = cityInput.value;
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", search, showTemperature);
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let h3 = document.querySelector("h3");
h3.innerHTML = day + " " + hours + ":" + minutes;
