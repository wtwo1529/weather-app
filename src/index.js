import "./style.css";
import "./weather-app.css";

async function fetchData(query) {
  try {
    let weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=EZR4NQ685DQQ5YBEPFV9SBFEP&contentType=json`
    );
    let dataJSON = await weatherData.json();
    console.log(dataJSON);
    return dataJSON;
  } catch (err) {}
}

async function renderData(query) {
  let searchQuery = query.trim().replaceAll(" ", "%20");
  console.log(searchQuery);
  let weatherData = await fetchData(searchQuery);

  let countryName = document.querySelector("#country-name");
  countryName.textContent = weatherData.resolvedAddress;

  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.textContent = weatherData.currentConditions.temp;

  let currentStatus = document.querySelector("#current-status");
  currentStatus.textContent = weatherData.currentConditions.conditions;

  let weatherStats = document.querySelector(".weather-stats");
  weatherStats.classList.add("visible");
}

let searchBar = document.querySelector("input");
searchBar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    renderData(searchBar.value);
  }
});
