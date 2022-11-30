let weather = {
    "apiKey": "40fe573e2d02437714746e185a41b962",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        +city + "&units=metric&appid="+ this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        
        document.querySelector(".city").textContent = "Weather in " + name; 
        document.querySelector(".desc").textContent = description; 
        document.querySelector(".temp").textContent = temp + "°C"; 
        document.querySelector(".humidity").textContent ="Humidity: " + humidity + "%"; 
        document.querySelector(".wind").textContent ="Wind Speed: " + speed+"km/h"; 
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png"; 

        document.querySelector(".weather").classList.remove("loading");

    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener('click', function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(e){
    if(e.key== "Enter"){
        weather.search();
    }
})


weather.fetchWeather("Durg");