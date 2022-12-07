import { axiosInstance } from '../../helpers/axiosInstance';
import { addArtist, addArtistas } from '../slices/artistSlice'
import { addAlbum, addAlbums } from '../slices/albumSlice';

import axios from 'axios';
export const chargingUser = () => {
  return async dispatch => {
    
      axios.get('http://3.19.59.225:8080/login',{
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
  })
      .then(({ data }) => {
        dispatch(addAlbum({ album: data }));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

