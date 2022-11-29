import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Home from '../pages/Home';
import Playlist from '../pages/user/Playlist';
import HomePage from '../pages/admi/Home'
import Artist from "../pages/Artist.jsx";
const DashRoutes = () => {
  const [currentPage, setCurrentPage] = useState('');
  return (
    <>
      <Navbar currentPage={ currentPage }/>
      <Routes>
        <Route path='/home' element={<Home onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/playlist' element={<Playlist onChangeCurrentPage={setCurrentPage}/>} />
        <Route path='/home-admi' element={<HomePage onChangeCurrentPage={setCurrentPage} />}/>
          <Route path='/artist' element={<Artist onChangeCurrentPage={setCurrentPage}/>}/>
        <Route
          path='/*'
          element={<Navigate to={('/login')} />}
        />
      </Routes>
    
    </>
  );
};

export default DashRoutes;
