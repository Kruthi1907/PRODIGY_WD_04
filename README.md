# WeatherHere

WeatherHere is a simple web application that allows users to get the current weather information for a specified location.

## Features

- **Weather Information:** Retrieve real-time weather data including temperature, weather description, and humidity.
- **Responsive Design:** The application is designed to be responsive, providing a good user experience on various devices.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/WeatherHere.git
   ```

2. Open the `index.html` file in a web browser or deploy the project on a web server.

3. Enter a location in the input field and click the "Get Weather" button to fetch weather data.

## Built With

- HTML
- CSS
- JavaScript

## API Usage

Weather data is retrieved using the [OpenWeatherMap API](https://openweathermap.org/api). You will need to obtain an API key and replace the placeholder in the `script.js` file with your own key.

```javascript
const apiKey = 'your-api-key';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
```
