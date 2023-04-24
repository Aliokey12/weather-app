export default function WeatherCard({ weatherData }) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  // Weather data sorted by date
  const sortedWeatherData = weatherData.list.sort((a, b) => {
    return new Date(a.dt_txt) - new Date(b.dt_txt);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {sortedWeatherData.map((item) => (
        <div key={item.dt} className="bg-white rounded-lg shadow-md p-4">
<h2 className="text-lg font-bold">{weekdays[new Date(item.dt_txt).getDay() - 1]}</h2>
          <img
            src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            alt="weather icon"
            className="mx-auto my-4"
          />
          <p className="text-center">{item.weather[0].description}</p>
          <p className="text-center">High: {Math.round(item.main.temp_max)}&deg;C</p>
          <p className="text-center">Low: {Math.round(item.main.temp_min)}&deg;C</p>
        </div>
      ))}
    </div>
  );
}
