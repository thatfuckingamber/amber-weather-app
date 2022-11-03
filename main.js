let weather = {
  apiKey: "eb2116488d2837d25e65f45a53f5ca7c",
  fetchWeather: function(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name }  = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector('.city').textContent = "Weather in " + name;
    document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector('.temp').textContent = temp + '°C';
    document.querySelector('.description').textContent = description;
    document.querySelector('.humidity').textContent = "Humidity: " + humidity + "%";
    document.querySelector(".wind").textContent = "Wind speed: " + speed + " km/h";
    document.querySelector('.weather').classList.remove('loading');
  },

  search: function() {
    this.fetchWeather(document.querySelector('.search-bar').value);
  }
};

document.querySelector('.submit').addEventListener('click', function() {
  weather.search();
})

document.querySelector('.search-bar').addEventListener('keyup', function(e) {
  if(e.key == "Enter") {
    weather.search();
  }
})

weather.fetchWeather('manila');
