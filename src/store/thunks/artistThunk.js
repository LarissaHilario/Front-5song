import { axiosInstance } from '../../helpers/axiosInstance';
import { addArtist, addArtistas } from '../slices/artistSlice'
import axios from 'axios';
export const chargingArtist = () => {
  return async dispatch => {
    
      axios.get('http://3.19.59.225:8080/artist',{
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
  })
      .then(({ data }) => {
        dispatch(addArtistas({ artist: data }));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const addNewArtist = (body) => {
  return async dispatch => {
      axios.post('http://3.19.59.225:8080/artist/',
        body
      )
      .then(resp => {
        dispatch(addArtist({ artist: resp.data }));
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

