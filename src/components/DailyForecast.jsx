import React from 'react';

const DailyForecast = ({ data }) => {
  if (!data || !data.daily) return null;

  // Get the next 7 days (skip the first entry which is today)
  const dailyData = data.daily.slice(1, 8);

  return (
    <div className="daily-forecast">
      <h3>7-Day Forecast</h3>
      <div className="daily-list">
        {dailyData.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          
          return (
            <div key={index} className="daily-item">
              <p>{dayName}</p>
              <img 
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                alt={day.weather[0].description}
              />
              <div className="temp-range">
                <span className="temp-high">{Math.round(day.temp.max)}°</span>
                <span className="temp-low">{Math.round(day.temp.min)}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
