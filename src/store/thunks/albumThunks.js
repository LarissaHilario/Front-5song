import { axiosInstance } from '../../helpers/axiosInstance';
import { addArtist, addArtistas } from '../slices/artistSlice'
import { addAlbum, addAlbums } from '../slices/albumSlice';

import axios from 'axios';
export const chargingAlbum = () => {
  return async dispatch => {
    
      axios.get('http://3.19.59.225:8080/album/',{
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
  })
      .then(({ data }) => {
        dispatch(addAlbums({ album: data }));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const addNewAlbum = (body) => {
  return async dispatch => {
      axios.post('http://3.19.59.225:8080/album/',
       
        body
      )
      .then(resp => {
        dispatch(addAlbum({ album: resp.data }));
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };
};