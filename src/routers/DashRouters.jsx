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
import { chargingPodcast } from '../store/thunks/podcastThunk';
import { chargingPlaylist } from '../store/thunks/playlistThunk';
import { chargingAlbum } from '../store/thunks/albumThunks';
import { chargingSong } from '../store/thunks/songThunk';
import PlaylistSingle from '../pages/user/individuales/Playlist/Playlist';

const DashRoutes = () => {
  const dispatch = useDispatch();
  const artist = useSelector(state => state.artist);
  const podcast=useSelector(state=>state.podcast);
  const playlist=useSelector(state=>state.playlist);
  const album=useSelector(state=>state.album)
  const song=useSelector(state=>state.song);

  const accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
   
    if (artist.artist === null) {
      dispatch(chargingArtist());
    }
    if (podcast.podcast === null) {
      dispatch(chargingPodcast());
    }
    if (playlist.playlist === null) {
      dispatch(chargingPlaylist());
    }
    if (album.album === null) {
      dispatch(chargingAlbum());
    }
    if (song.song === null){
      dispatch(chargingSong());
    }
   dispatch(login({accessToken, isAuthenticathed: true}));
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
        <Route path='/artist/:id' element={<Artist/>}/>
        <Route path='/playlist/:id' element={<PlaylistSingle/>}/>
        <Route path="/*" element={<Navigate to={"/login"} />} />
      </Routes>
    </>
  );
};

export default DashRoutes;
