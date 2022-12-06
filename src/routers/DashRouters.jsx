import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Home from '../pages/Home';
import { login } from '../store/slices/authSlice';
import { chargingArtist } from '../store/thunks/artistThunk';
import HomePage from '../pages/admi/Home'
import PlaylistPage from '../pages/user/Playlist/PlaylistPage';
import PodcastPage from '../pages/user/podcast/PodcastPage';
import ArtistPage from '../pages/user/artist/artistPage';
import Artist from "../pages/user/individuales/Artist/Artist.jsx";
import Library from '../pages/user/library/Library';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const DashRoutes = () => {
  const dispatch = useDispatch();
  const artist = useSelector(state => state.artist);
  const accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
   
    if (artist.artist === null) {
      dispatch(chargingArtist());
    }
    //dispatch(login({accessToken, isAuthenticathed: true}));
  },[]);
  const [currentPage, setCurrentPage] = useState("");
  return (
    <>
      <Navbar currentPage={currentPage} />
      <Routes>
        <Route path='/home' element={<Home onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/podcast' element={<PodcastPage onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/library' element={<Library onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/artist' element={<ArtistPage onChangeCurrentPage={setCurrentPage} />}/>
        <Route path='/playlist' element={<PlaylistPage onChangeCurrentPage={setCurrentPage}/>}/>
        <Route path='/home-admi' element={<HomePage onChangeCurrentPage={setCurrentPage} />}/>
        <Route path="/*" element={<Navigate to={"/login"} />} />
      </Routes>
    </>
  );
};

export default DashRoutes;