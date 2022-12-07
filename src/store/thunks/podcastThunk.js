
import axios from 'axios';
import { addPodcast,addPodcasts } from '../slices/podcastSlice';

export const chargingPodcast = () => {
  return async dispatch => {
    
      axios.get('http://3.19.59.225:8080/podcast',{
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
  })
      .then(({ data }) => {
        dispatch(addPodcast({ podcast: data }));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const addNewPodcast = (body) => {
  return async dispatch => {
      axios.post('http://3.19.59.225:8080/podcast',
        body
      )
      .then(resp => {
        dispatch(addPodcasts({ podcast: resp.data }));
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };
};