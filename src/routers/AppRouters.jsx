
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from '../pages/Login';

import DashRoutes from './DashRouters';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import SignUp from '../pages/user/SignUp/SignUp';

const AppRouters = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<LoginPage />} /> */}
        <Route
          path='/login'
          element={
           
              <Login/>
           
          }
        />
        <Route
          path='/signUp'
          element={
            
              <SignUp></SignUp>
            
          }
        />
        <Route
          path='/*'
          element={
            
            <DashRoutes></DashRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;


