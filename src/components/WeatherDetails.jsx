import React from "react";

function WeatherDetails({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Weather Details</h3>
      <p>Temperature: {weatherData.list[0].main.temp}°C</p>
      <p>Humidity: {weatherData.list[0].main.humidity}%</p>
      <p>Description: {weatherData.list[0].weather[0].description}</p>
      <p>Wind Speed: {weatherData.list[0].wind.speed}m/s</p>
    </div>
  );
}

export default WeatherDetails;
