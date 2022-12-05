

import { addArtist, addArtistas } from '../slices/artistSlice'

export const chargingArtist = () => {
  return dispatch => {
    fetch('http://18.116.50.13:8080/artist')
      .then(({ data }) => {
        dispatch(addArtistas({ artist: data }));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

