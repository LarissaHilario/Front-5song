import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavbarAdmi from '../layouts/admi/NavbarAdmi';
import UploadArtist from '../pages/admi/Artist/UploadArtist';
import UploadPodcast from '../pages/admi/podcast/PodcastPage';
import Songs from '../pages/admi/song/Songs';
import Home from '../pages/Home';
import { chargingArtist } from '../store/thunks/artistThunk';


const AdmiRoutes = () => {
  const dispatch = useDispatch();
 
  const artist = useSelector(state => state.artist);
  const [currentPage, setCurrentPage] = useState('');
  
  useEffect(() => {
  
    if (artist.artist === null) {
      dispatch(chargingArtist());
    }
    
  },[]);

  return (
    <>
     <NavbarAdmi currentPage={ currentPage }/>
      <Routes>
        <Route path='/uploadArtist' element={<UploadArtist onChangeCurrentPage={setCurrentPage} />}/>
        /<Route path='/uploadPodcast' element={<UploadPodcast onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/song' element={<Songs onChangeCurrentPage={setCurrentPage} />}/>*/
        <Route
          path='/*'
          element={<Navigate to={('/loginAdmi')} />}
        />
      </Routes>
    
    </>
  );
};

export default AdmiRoutes;