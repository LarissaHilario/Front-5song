import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import NavbarAdmi from '../layouts/admi/NavbarAdmi';
import UploadArtist from '../pages/admi/Artist/UploadArtist';
import UploadPodcast from '../pages/admi/podcast/PodcastPage';
import Songs from '../pages/admi/song/Songs';
import Home from '../pages/Home';

const AdmiRoutes = () => {
  const [currentPage, setCurrentPage] = useState('');
  return (
    <>
     <NavbarAdmi currentPage={ currentPage }/>
      <Routes>
        <Route path='/uploadArtist' element={<UploadArtist onChangeCurrentPage={setCurrentPage} />}/>
        /<Route path='/uploadPodcast' element={<UploadPodcast onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/song' element={<Songs onChangeCurrentPage={setCurrentPage} />}/>*/
        <Route
          path='/*'
          element={<Navigate to={('/login-admi')} />}
        />
      </Routes>
    
    </>
  );
};

export default AdmiRoutes;