document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const searchButton = document.getElementById('search-button');
    const cityInput = document.getElementById('city-input');
    const weatherDetails = document.getElementById('weather-details');
    weatherDetails.classList.add("before-weather")

    searchButton.addEventListener('click', getWeather);

    async function getWeather() {
        const city = cityInput.value.trim();
        const apiKey = `931f131dde3f4ae2fcbc3289fc646471`
        if (city) {
            try {
                /* let city = cityName.value;
    const myWeatherContainer = document.querySelector('.weatherContainer');
    const apiKey = `931f131dde3f4ae2fcbc3289fc646471`;
    // API URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}` */

                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                const data = await response.json();
                if (data.cod === 200) {
                    console.log(data)
                    displayWeather(data);

                } else {
                    weatherDetails.innerHTML = `<p>City not found!</p>`;
                }
            } catch (error) {
                weatherDetails.innerHTML = `<p>Failed to fetch data. Please try again later.</p>`;
            }
        }
    }

    function displayWeather(data) {
        const {
            name,
            main,
            weather

        } = data;
        weatherDetails.classList.remove("before-weather")
        weatherDetails.classList.add("after-weather")

        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@4x.png`
        weatherDetails.innerHTML = `
            <p><strong>${name}</strong></p>
            <p>Temperature: ${main.temp}°C</p>
            
            <p>H: <span>${main.temp_max}° </span> </p><p>   L: <span>${main.temp_min}° </span></p>
            <img src=${icon} />
            <p>Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
        `;
    }
});