import { useState, useEffect } from "react";
import Cards from "../../../components/artist/Cards";
import styles from "./podcast.module.css"

import Playlist from "../../../components/playlist-list/Playlist";
function Podcast() {
 
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
     fetch('http://18.116.50.13:8080/podcast')
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
        
           
           <br></br> <div className={styles.containerPlay}>
            {playlist.map((play)=> {
                return (
                    <Cards
                      key={play.id}
                      name={play.name}
                      img={play.photoUrl}
                    />
                   
                )
               
            })}  
            </div>
        </>
    );
  }
  

  export default Podcast;