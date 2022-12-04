import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Home from "../pages/user/Home";
import Playlist from "../pages/user/Playlist";
import HomePage from "../pages/admi/Home";
import HomeAdmi from "../pages/admi/Home";
import SongUPage from "../pages/admi/UploadAdmin/SongUPage";
import PodcastUPage from "../pages/admi/UploadAdmin/PodcastUPage";
import AlbumUPage from "../pages/admi/UploadAdmin/AlbumUPage";

const DashRoutes = () => {
  const [currentPage, setCurrentPage] = useState("");
  return (
    <>
      <Navbar currentPage={currentPage} />
      <Routes>
        <Route
          path="/home"
          element={<Home onChangeCurrentPage={setCurrentPage} />}
        />
        <Route
          path='/home-admin'
          element={<HomeAdmi/>}  
        />
        <Route
          path="/podcast"
          element={<Home onChangeCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/album"
          element={<Home onChangeCurrentPage={setCurrentPage} />}
        />
        <Route

          path="/library"
          element={<Home onChangeCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/browser"
          element={<Home onChangeCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/playlist"
          element={<Playlist onChangeCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/home-admi"
          element={<HomePage onChangeCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/Upload-song"
          element={<SongUPage/>}
        />
        <Route
          path="/Upload-podcast"
          element={<PodcastUPage/>}
        />
        <Route
          path="/Upload-album"
          element={<AlbumUPage/>}
        />
        <Route path="/*" element={<Navigate to={"/login"} />} />
      </Routes>
    </>
  );
};

export default DashRoutes;
