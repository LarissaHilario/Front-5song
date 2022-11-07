
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from '../pages/Login/Login';

import DashRoutes from './DashRouters';


const AppRouters = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<LoginPage />} /> */}
        <Route
          path='/login'
          element={
              <Login />
          }
        />
        <Route
          path='/*'
          element={
              <DashRoutes />
           
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
