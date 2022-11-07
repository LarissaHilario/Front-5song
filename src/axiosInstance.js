import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 
  'http://3.12.108.156:8080/',
  headers: {
    'Content-type': 'application/json',
  },
});