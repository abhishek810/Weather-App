let weather = {
    "apiKey" : "c794fe42fa9d42c3861171637220402",
    fetchWeather: function(city) {
        fetch(
            "http://api.weatherapi.com/v1/current.json?key=" + this.apiKey + "&q="+ city +" &aqi=no"
        )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data.location;
        const {feelslike_c, humidity, wind_kph} = data.current;
        const {text, icon} = data.current.condition;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = icon;
        document.querySelector(".temp").innerText = feelslike_c + "°C";
        document.querySelector(".description").innerText = text;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
        document.querySelector(".wind").innerText = "Wind speed is " + wind_kph + "kph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function(e) {
    if(e.key == "Enter") {
        weather.search();
    }
});