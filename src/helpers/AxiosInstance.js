import axios from 'axios';

export const  axiosInstance= axios.create({
  baseURL: 'http://3.144.208.227:8080/',
  headers: {
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
  },
});