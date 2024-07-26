import axios from 'axios';

export const fetchWeatherData = async (latitude, longitude, unit = 'metric') => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=3144b5929ea1a890753e8f8b8b805aee`);
  return response.data;
};
