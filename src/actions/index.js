import axios from 'axios';

const API_KEY = 'sign up for api key';
const OPEN_WEATHER_BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){

    const url = `${OPEN_WEATHER_BASE_URL}${city},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}