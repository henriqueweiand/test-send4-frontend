import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.sunrise-sunset.org/json',
});

export const getUserLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    location => resolve(location),
    error => reject(error),
  );
});
