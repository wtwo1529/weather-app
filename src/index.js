import getDate from "./datetime";

import "./style.css";
import "./weather-app.css";

async function fetchData(query) {
  try {
    let weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=EZR4NQ685DQQ5YBEPFV9SBFEP&contentType=json`
    );
    console.log(weatherData);
    if (weatherData.ok) {
      let dataJSON = await weatherData.json();
      console.log(dataJSON);
      return dataJSON;
    } else {
      throw new Error(weatherData.status);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function renderData(query) {
  let searchQuery = query.trim().replaceAll(" ", "%20");
  console.log(searchQuery);
  let weatherData = await fetchData(searchQuery);

  if (!weatherData) {
    return;
  }
  let date = getDate(weatherData.currentConditions.datetime);
  console.log(date);

  let countryName = document.querySelector("#country-name");
  countryName.textContent = weatherData.resolvedAddress;

  let currentStatus = document.querySelector("#current-status");
  currentStatus.textContent = weatherData.currentConditions.conditions;

  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.textContent = weatherData.currentConditions.temp;

  let feelsLike = document.querySelector("#feels-like");
  feelsLike.textContent = weatherData.currentConditions.feelslike;

  let humidity = document.querySelector("#humidity");
  humidity.textContent = weatherData.currentConditions.humidity;

  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.textContent = weatherData.currentConditions.windspeed;

  let weatherStats = document.querySelector(".weather-stats");
  weatherStats.classList.add("visible");
}

let searchBar = document.querySelector("input");
searchBar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    renderData(searchBar.value);
  }
});
