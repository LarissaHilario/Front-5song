
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Login from '.././pages/user/Login/Login';
import SingInAdmin from '../pages/admi/Login/SingInAdmin';
import DashRouters from './DashRouters';
import SignUp from '../pages/user/SignUp/SignUp';
import AdmiRoutes from './AdmiRouters';
import PublicRoutes from './PublicRouters';
import PrivateRoutes from './PrivateRouters';



const AppRouters = () => {
  const authState = useSelector(state => state.authState);
  useEffect(() => {}, [authState]);
  return (


    
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoutes>
              <Login/>
            </PublicRoutes>
              
          }
        />
        <Route
          path='/signUp'
          element={
            <PublicRoutes>
               <SignUp/>
            </PublicRoutes>
             
            
          }
        />
        
        
        <Route
          path='/*'
          element={
            <PrivateRoutes>
            <AdmiRoutes/></PrivateRoutes>
       
          }
        />

        
        
         <Route
          path='/loginAdmi'
          element={
            <PublicRoutes>
              <SingInAdmin/>
            </PublicRoutes>
             
          }
        />
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default AppRouters;


