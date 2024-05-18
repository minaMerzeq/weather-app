import React from 'react';

const WeatherInfo = ({ weather }) => {
  if (!weather) {
    return <div className="text-center mt-8 text-xl text-gray-200">No weather data available. Please search for a location.</div>;
  }

  return (
    <div className="mt-8 p-8 max-w-sm mx-auto bg-white bg-opacity-20 rounded-xl shadow-lg flex flex-col items-center space-y-4 text-center">
      <h2 className="text-4xl font-bold drop-shadow-md">{weather.city}</h2>
      <img src={weather.icon} alt={weather.description} className="w-24 h-24" />
      <p className="text-6xl font-bold">{Math.round(weather.temp - 273.15)}°C</p>
      <p className="text-2xl capitalize">{weather.description}</p>
      <div className="text-lg space-y-2">
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind Speed: {weather.windSpeed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
