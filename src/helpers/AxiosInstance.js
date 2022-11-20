import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 
  'http://18.119.120.75:8080/',
  headers: {
    'Content-type': 'application/json',
  },
});