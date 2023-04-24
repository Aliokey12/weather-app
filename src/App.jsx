import React, { useState, useEffect } from "react";
import axios from "axios";
import Headers from "./components/Headers";
import WeatherDetails from "./components/WeatherDetails";
import WeatherCard from "./components/Weathercard";

function App() {
  const [city, setCity] = useState("Antalya");
  const [weatherData, setWeatherData] = useState(null);
  const APIkey = "9709ee4dbe40843a2c8e1def5fb7e096";

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIkey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div>
      <Headers />
      <form onSubmit={handleSubmit} className="my-4">
        <label htmlFor="city" className="mr-2">
          Select a city:
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={handleCityChange}
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2"
        >
          Submit
        </button>
      </form>
      {weatherData && (
        <>
          <WeatherCard weatherData={weatherData} />
          <WeatherDetails weatherData={weatherData} />
        </>
      )}
    </div>
  );
}

export default App;
