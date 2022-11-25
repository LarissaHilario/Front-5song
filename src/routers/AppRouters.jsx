
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from '.././pages/user/Login/Login1';
import LoginAdmi from '../pages/admi/Login/AdmiLogin';

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
         <Route
          path='/login-admi'
          element={
             <LoginAdmi/>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;


