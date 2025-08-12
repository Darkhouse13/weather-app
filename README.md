# Weather Application

A modern, responsive weather application built with React and Vite that provides current weather information and forecasts using the OpenWeatherMap API.

## Features

- Current weather display with temperature, conditions, and humidity
- 12-hour hourly forecast
- 7-day daily forecast
- Responsive design that works on mobile and desktop
- City search functionality
- Loading states and error handling

## Technologies Used

- React (with Hooks)
- Vite
- OpenWeatherMap API
- CSS3 (with Flexbox for layout)

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your OpenWeatherMap API key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Previews the production build locally

## Deployment

This application can be deployed to Netlify, Vercel, or any static hosting service. Make sure to set the `VITE_OPENWEATHER_API_KEY` environment variable in your hosting platform.

## API Key

To use this application, you need to obtain a free API key from [OpenWeatherMap](https://openweathermap.org/api). The free tier allows for 1,000 API calls per day, which is more than sufficient for this application.

## Project Structure

```
src/
├── components/
│   ├── Search.jsx
│   ├── WeatherDisplay.jsx
│   ├── CurrentWeather.jsx
│   ├── HourlyForecast.jsx
│   └── DailyForecast.jsx
├── services/
│   └── weatherService.js
├── App.jsx
└── main.jsx
```

## Component Overview

- **App.jsx**: Main application component that manages state and handles the search functionality
- **Search.jsx**: Component for city search input
- **WeatherDisplay.jsx**: Wrapper component that conditionally renders weather data based on state
- **CurrentWeather.jsx**: Displays current weather conditions
- **HourlyForecast.jsx**: Shows 12-hour forecast
- **DailyForecast.jsx**: Shows 7-day forecast
- **weatherService.js**: Handles API calls to OpenWeatherMap

## Contributing

Feel free to fork this repository and submit pull requests with improvements or bug fixes.

## License

This project is open source and available under the MIT License.
