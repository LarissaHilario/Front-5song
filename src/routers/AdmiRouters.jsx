import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavbarAdmi from '../layouts/NavbarAdmi';
import UploadArtist from '../pages/admi/Artist/UploadArtist';


const AdmiRouters=()=>{
    const [currentPage, setCurrentPage] = useState('');
    return (
        <>
        <NavbarAdmi currentPage={ currentPage }/>
        <Routes>
       
        <Route path='/uploadArtist' element={<UploadArtist onChangeCurrentPage={setCurrentPage} />}/>
        <Route
          path='/'
          element={<Navigate to={('/login-admi')} />}
        />
      </Routes>
    
       </>

    )
}
export default AdmiRouters