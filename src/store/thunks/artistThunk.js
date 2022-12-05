
import { addArtist,addArtistas } from '../slices/artistSlice';

export const cargarArtist = () => {
  return async dispatch => {
    fetch('http://18.116.50.13:8080/artist')
      .then(({ data }) => {
        dispatch(addArtistas({ artistas: data }));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const addNewArtist = (body) => {
  return async dispatch => {
    axios
      .post('http://18.116.50.13:8080/artist', body)
      .then(resp => {
        dispatch(addArtist({ artista: resp.data }));
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
