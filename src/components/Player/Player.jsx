import React, { useEffect, useState } from "react";
// import "./player.css";
// import { useLocation } from "react-router-dom";
import songs from "./tracksTests";
// import SongCard from "../../components/songCard/SongCard";
// import Queue from "../../components/queue";
import AudioPlayer from "../audioPlayer/AudioPlayer";
// import Widgets from "../../components/widgets";

const  Player=()=> {
//   const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
//     if (location.state) {
//       apiClient
//         .get("playlists/" + location.state?.id + "/tracks")
//         .then((res) => {
          setTracks(songs);
          setCurrentTrack(songs);
//         });
//     }
  });

  useEffect(() => {
    setCurrentTrack(songs.at().track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          currentTrack={currentTrack}
          total={songs.length}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        {/* <Widgets artistID={currentTrack?.album?.artists[0]?.id} /> */}
    </div>
    </div>
  );
}

export default Player;