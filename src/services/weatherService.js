import axios from "axios";

// const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
const BASE_URL = "https://localhost:7093";
const weatherUrl = `${BASE_URL}/Weather`;

export const fetchWeather = async (location) => {
  const response = await axios.get(`${weatherUrl}?location=${location}`);
  return response.data;
};
