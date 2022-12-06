import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://3.133.148.66:8080/',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  },
});
