import React from 'react';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

const WeatherDisplay = ({ weatherData, isLoading, error }) => {
  if (isLoading) {
    return <div className="loading">Loading weather data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!weatherData) {
    return (
      <div className="welcome-message">
        <h2>Welcome to Weather App</h2>
        <p>Enter a city name above to get started</p>
      </div>
    );
  }

  return (
    <div className="weather-display">
      <CurrentWeather data={weatherData} />
      <HourlyForecast data={weatherData} />
      <DailyForecast data={weatherData} />
    </div>
  );
};

export default WeatherDisplay;
