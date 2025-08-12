import React from 'react';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const { temp, humidity, weather } = data.current;
  const { name, country } = data.location;

  return (
    <div className="current-weather">
      <h2>{name}, {country}</h2>
      <div className="weather-main">
        <img 
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
          alt={weather[0].description}
        />
        <div className="temperature">{Math.round(temp)}°C</div>
      </div>
      <div className="weather-description">{weather[0].description}</div>
      <div className="weather-details">
        <p>Humidity: {humidity}%</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
