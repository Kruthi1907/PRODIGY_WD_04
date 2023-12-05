function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    const apiKey = 'ef6d52ea4e93c967ef4ad5c6c4844a94';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-info');
    const weatherInfo = document.createElement('div');
    weatherInfo.innerHTML = `
        <h2>Current Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
    weatherContainer.innerHTML = '';
    weatherContainer.appendChild(weatherInfo);
}
