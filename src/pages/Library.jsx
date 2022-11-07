import React, { useState, useEffect } from "react";
// import APIKit from "../components/playlist-list/ListPlaylist";
// import { IconContext } from "react-icons";
// import { AiFillPlayCircle } from "react-icons/ai";
// import "./library.css";
import { useNavigate } from "react-router-dom";
import { cakes } from "../components/playlist-list/ListPlaylist";

const Library=()=> {
    const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // APIKit.get("me/playlists").then(function (response) {
      setPlaylists(cakes);
    // });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };
  useEffect(() => {
    fetch(`http://3.12.108.156:8080/${userId}'/library`)
       .then((response) => response.json())
       .then((data) => {
          console.log(data.data);
          setPosts(data.data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div className="screen-container">
    <div className="library-body">
      {cakes.map((playlist) => (
        <div
          className="playlist-card"
          key={playlist.id}
          onClick={() => playPlaylist(playlist.id)}
        >
          <img
            src={playlist.image}
            className="playlist-image"
            alt="Playlist-Art"
          />
          <p className="playlist-title">{playlist.name}</p>
          <p className="playlist-subtitle">{playlist.tracks} Songs</p>
          <div className="playlist-fade">
            <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Library;