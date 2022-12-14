import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavbarAdmi from '../layouts/admi/NavbarAdmi';
import UploadArtist from '../pages/admi/Artist/UploadArtist';
import UploadPodcast from '../pages/admi/podcast/PodcastPage';
import Songs from '../pages/admi/song/Songs';
import Home from '../pages/Home';
import { chargingArtist } from '../store/thunks/artistThunk';
import { chargingPodcast } from '../store/thunks/podcastThunk';
import { chargingSong } from '../store/thunks/songThunk';
import { login } from '../store/slices/authSlice';
import { chargingAlbum } from '../store/thunks/albumThunks';


const AdmiRoutes = () => {
  const dispatch = useDispatch();
 
  const artist = useSelector(state => state.artist);
  const podcast= useSelector(state=> state.podcast);
  const song= useSelector(state=> state.song);
  const album= useSelector(state=>state.album);
  const [currentPage, setCurrentPage] = useState('');
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
  
    if (artist.artist === null) {
      dispatch(chargingArtist());
    }
    if (podcast.podcast === null){
      dispatch(chargingPodcast());
    }
    if (song.song === null){
      dispatch(chargingSong());
    }
    if (album.album === null){
      dispatch(chargingAlbum());
    }
    dispatch(login({accessToken, isAuthenticathed: true}));
  },[]);

  return (
    <>
     <NavbarAdmi currentPage={ currentPage }/>
      <Routes>
        <Route path='/uploadArtist' element={<UploadArtist onChangeCurrentPage={setCurrentPage} />}/>
        /<Route path='/uploadPodcast' element={<UploadPodcast onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/song' element={<Songs onChangeCurrentPage={setCurrentPage} />}/>*/
        <Route
          path='/'
          element={<Navigate to={('/loginAdmi')} />}
        />
      </Routes>
    
    </>
  );
};

export default AdmiRoutes;