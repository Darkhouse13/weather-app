import React from 'react';

const HourlyForecast = ({ data }) => {
  if (!data || !data.hourly) return null;

  // Get the next 12 hours
  const hourlyData = data.hourly.slice(0, 12);

  return (
    <div className="hourly-forecast">
      <h3>Hourly Forecast</h3>
      <div className="hourly-list">
        {hourlyData.map((hour, index) => {
          const date = new Date(hour.dt * 1000);
          const hours = date.getHours();
          const time = `${hours}:00`;
          
          return (
            <div key={index} className="hourly-item">
              <p>{time}</p>
              <img 
                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} 
                alt={hour.weather[0].description}
              />
              <p>{Math.round(hour.temp)}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
