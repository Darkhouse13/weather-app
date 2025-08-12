/**
 * Fetches weather data for a given city using a two-step API process:
 * 1. Geocode the city name to get latitude and longitude
 * 2. Use the coordinates to fetch detailed weather data
 * @param {string} cityName - The name of the city to search for
 * @returns {Promise<Object>} The weather data from the One Call API
 */
export const fetchWeatherForCity = async (cityName) => {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  
  // Step 1: Get coordinates from Geocoding API
  const geocodeResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
  );
  
  if (!geocodeResponse.ok) {
    throw new Error('Failed to fetch geocoding data');
  }
  
  const geocodeData = await geocodeResponse.json();
  
  if (geocodeData.length === 0) {
    throw new Error('City not found');
  }
  
  const { lat, lon } = geocodeData[0];
  
  // Step 2: Use coordinates to get weather data from One Call API
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&exclude=minutely,alerts`
  );
  
  if (!weatherResponse.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  const weatherData = await weatherResponse.json();
  return weatherData;
};

export default { fetchWeatherForCity };
