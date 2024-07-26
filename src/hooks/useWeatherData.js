import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherData = (latitude, longitude, unit) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=3144b5929ea1a890753e8f8b8b805aee`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude, unit]);

  return weatherData;
};

export default useWeatherData;
