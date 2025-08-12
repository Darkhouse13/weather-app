import React, { useState } from 'react';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import { fetchWeatherForCity } from './services/weatherService';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (cityName) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeatherForCity(cityName);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <Search onSearch={handleSearch} />
      <WeatherDisplay 
        weatherData={weatherData} 
        isLoading={isLoading} 
        error={error} 
      />
    </div>
  );
}

export default App;
