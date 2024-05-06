const key =
  "https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&appid=37e17cfe43dbe6e51ad8b0c80333bffc&units=imperial";
currentTemp = document.querySelector("#current-temp");
currentHumid = document.querySelector("#current-humid");
currentWindSpeed = document.querySelector("#current-windSpeed");
currentWindChill = document.querySelector("#current-windChill");

fetch(key)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    currentWindSpeed.textContent = jsObject.wind.speed;
    currentHumid.textContent = jsObject.main.humidity;
    currentTemp.textContent = jsObject.main.temp;
    currentWindChill.textContent =
      jsObject.main.temp - jsObject.wind.speed * 0.7;
    const descrip = jsObject.weather[0].description;
    document.getElementById("current-desc").textContent = descrip;
  });
