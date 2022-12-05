
import { axiosInstance } from '../../helpers/AxiosInstance';
import { addArtist, addArtistas } from '../slices/artistSlice';

export const cargarArtist = () => {
    return async dispatch => {
        axiosInstance
          .get('artist')
            .then(({ data }) => {
                dispatch(addArtistas({ artists: data }));
            })
            .catch(err => {
                console.log(err.message);
            });
    };
};


export const addNewArtist = (body) => {
    return dispatch => {
        fetch('http://18.116.50.13:8080/artist', {
            method: 'POST',
            body})
      .then(resp => {
            dispatch(addArtist({ artist: resp.data }));
            console.log(resp);
        })
    .catch(err => {
        console.log(err);
    });
  };
};
