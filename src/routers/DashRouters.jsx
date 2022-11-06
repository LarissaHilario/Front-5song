import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Home from '../pages/Home';



const DashRoutes = () => {
  const [currentPage, setCurrentPage] = useState('');
  return (
    <>
      <Navbar currentPage={ currentPage }/>
      <Routes>
        <Route path='/home' element={<Home onChangeCurrentPage={setCurrentPage} />}/>
        <Route
          path='/*'
          element={<Navigate to={('/home')} />}
        />
      </Routes>
    
    </>
  );
};

export default DashRoutes;
