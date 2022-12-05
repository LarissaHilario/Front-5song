
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from '.././pages/user/Login/Login';
import SingInAdmin from '../pages/admi/Login/SingInAdmin';

import DashRoutes from './DashRouters';


import SignUp from '../pages/user/SignUp/SignUp';
import AdmiRoutes from './AdmiRouters';
//import { useCheckAuth } from '../hooks/useCheckAuth';


const AppRouters = () => {


  return (


    
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
              <Login/>
          }
        />
        <Route
          path='/signUp'
          element={
            
              <SignUp/>
            
          }
        />
        
        <Route
          path='/*'
          element={
        <AdmiRoutes></AdmiRoutes>
          }
        />
        
         <Route
          path='/loginAdmi'
          element={
             <SingInAdmin/>
          }
        />
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default AppRouters;


