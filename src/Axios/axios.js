import axios from 'axios';

const getDataAxios = axios.create({
  baseURL: 'https://restcountries.com/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCountries = (url, params) => getDataAxios.get(url, { params });

export const post = (url, data) => getDataAxios.post(url, data);

export default getDataAxios;
