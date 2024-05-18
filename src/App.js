import { useState } from "react";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import SearchBar from "./components/SearchBar";
import { fetchWeather } from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (location) => {
    try {
      const data = await fetchWeather(location);
      setWeather(data);
      localStorage.setItem("location", location);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex flex-col items-center justify-center text-white py-10">
      <h1 className="text-6xl font-bold mb-10 drop-shadow-lg">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherInfo weather={weather} />
    </div>
  );
}

export default App;
