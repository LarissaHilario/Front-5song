import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Home from '../pages/Home';

import HomePage from '../pages/admi/Home'
import PlaylistPage from '../pages/user/Playlist/PlaylistPage';
import PodcastPage from '../pages/user/podcast/PodcastPage';
import ArtistPage from '../pages/user/artist/artistPage';

const DashRoutes = () => {
  const [currentPage, setCurrentPage] = useState("");
  return (
    <>
      <Navbar currentPage={currentPage} />
      <Routes>
        <Route path='/home' element={<Home onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/podcast' element={<PodcastPage onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/library' element={<Home onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/artist' element={<ArtistPage onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/playlist' element={<PlaylistPage onChangeCurrentPage={setCurrentPage}/>}/>
        <Route path='/home-admi' element={<HomePage onChangeCurrentPage={setCurrentPage} />}/>
        
        <Route path="/*" element={<Navigate to={"/login"} />} />
      </Routes>
    </>
  );
};

export default DashRoutes;
