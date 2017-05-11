import axios from 'axios';

const API_KEY = 'e93c9b1819b9b592322f0b65a4da5e40';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
