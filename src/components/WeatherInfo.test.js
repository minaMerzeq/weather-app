import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherInfo from "./WeatherInfo";

describe("WeatherInfo component", () => {
  test("renders message when no weather data is provided", () => {
    render(<WeatherInfo />);
    const messageElement = screen.getByText(/No weather data available/i);
    expect(messageElement).toBeInTheDocument();
  });

  test("renders weather information when provided", () => {
    const weather = {
      city: "New York",
      icon: "http://example.com/icon.png",
      temp: 20 + 273.15,
      description: "Cloudy",
      humidity: 80,
      windSpeed: 5,
    };
    render(<WeatherInfo weather={weather} />);

    const cityElement = screen.getByText(/New York/i);
    expect(cityElement).toBeInTheDocument();

    const iconElement = screen.getByAltText(/Cloudy/i);
    expect(iconElement).toBeInTheDocument();

    const tempElement = screen.getByText(/20°C/i);
    expect(tempElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(/Cloudy/i);
    expect(descriptionElement).toBeInTheDocument();

    const humidityElement = screen.getByText(/Humidity: 80%/i);
    expect(humidityElement).toBeInTheDocument();

    const windSpeedElement = screen.getByText(/Wind Speed: 5 m\/s/i);
    expect(windSpeedElement).toBeInTheDocument();
  });
});
