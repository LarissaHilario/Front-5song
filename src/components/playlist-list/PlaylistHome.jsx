import { useState, useEffect } from "react";
import "./list.css"
import Playlist from "./Playlist";
import globos from '../../assets/images/globos.jpg'
function PlaylistHome() {
 
  const [playlist, setPlaylist] = useState([]);
  const [playlistH]= useState([4])

  useEffect(() => {
     fetch('http://3.19.59.225:8080/playlist')
        .then((response) => response.json())
        .then((data) => {
           console.log(data.data);
           setPlaylist(data.data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
    return (
        <>
        
           
           <br></br> <div className="containerPlay">
            {playlist.map((play, i)=> {
               if (i < playlistH) {
                return (
                    <Playlist
                      key={play.id}
                      title={play.name}
                      songs={play.duration}
                      image={play.photoUrl}
                    />
                )
              } else {
                return null;
              } 
            })}  
            </div>
        </>
    );
  }
  

  export default PlaylistHome;
