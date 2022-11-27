import React, { useEffect, useState } from "react";
import "./player.css";
// import { useLocation } from "react-router-dom";
// import songs from "./tracksTests";
// import SongCard from "../../components/songCard/SongCard";
// import Queue from "../../components/queue";
import AudioPlayer from "../audioPlayer/AudioPlayer";
// import Widgets from "../../components/widgets";

const Player = () => {
  //   const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
     fetch('http://3.135.19.149:8080/song')
        .then((response) => response.json())
        .then((data) => {
           console.log(data.data);
           setTracks(data.data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  useEffect(() => {
    setCurrentTrack(tracks.at());
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container">
      <div className="left-player-body">
      {/* {tracks.map((track)=> { */}
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks.length}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      {/* })} */}
      </div>
    </div>
  );
}

export default Player;