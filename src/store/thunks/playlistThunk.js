import { axiosInstance } from '../../helpers/axiosInstance';
import { addPlaylist,addPlaylists } from '../slices/playlistSlice';
import axios from 'axios';

export const chargingPlaylist = () => {
  return async dispatch => {
    
      axios.get('http://3.19.59.225:8080/playlist/',{
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
  })
      .then(({ data }) => {
        dispatch(addPlaylists({ playlist: data }));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const addNewPlaylist = (body) => {
  return async dispatch => {
      axios.post('http://3.19.59.225:8080/playlist/',
       
        body
      )
      .then(resp => {
        dispatch(addPlaylist({ playlist: resp.data }));
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };
};