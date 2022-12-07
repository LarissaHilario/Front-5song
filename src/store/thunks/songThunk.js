
import axios from 'axios';
import { addSong, addCanciones } from '../slices/songSlice';

export const chargingSong = () => {
  return async dispatch => {
    
      axios.get('http://3.19.59.225:8080/song',{
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
  })
      .then(({ data }) => {
        dispatch(addCanciones({ song: data }));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const addNewSong = (body) => {
  return async dispatch => {
      axios.post('http://3.19.59.225:8080/song/',
        body
      )
      .then(resp => {
        dispatch(addSong({ song: resp.data }));
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

