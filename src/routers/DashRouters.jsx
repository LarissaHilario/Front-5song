import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Playlist from '../pages/user/Playlist';
import HomePage from '../pages/admi/Home'

const DashRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/podcast' element={<Home onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/album' element={<Home onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/library' element={<Home onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/browser' element={<Home onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/playlist' element={<Playlist onChangeCurrentPage={setCurrentPage}/>} />
        <Route path='/home-admi' element={<HomePage onChangeCurrentPage={setCurrentPage} />}/>
        <Route
          path='/*'
          element={<Navigate to={('/login')} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default DashRoutes;
