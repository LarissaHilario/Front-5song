
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from '.././pages/user/Login/Login';
import LoginAdmi from '../pages/admi/Login/AdmiLogin';
import SingUp from '../pages/user/SignUp/SignUp'
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
        <Route
          path='/signUp'
          element={
              <SingUp />
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
