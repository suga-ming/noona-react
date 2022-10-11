import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather은?", weather);
  return (
    <div className="weather-area">
      <div className="city">{weather && weather.name}</div>
      <div className="temp">
        {weather && weather.main.temp}C/
        {weather && parseFloat(weather.main.temp * 1.8 + 32).toFixed(2)}F
      </div>
      <div className="weather">{weather && weather.weather[0].description}</div>
    </div>
  );
};

export default WeatherBox;
