import { useState, useEffect } from "react";
import "./list.css"
import Playlist from "./Playlist";
import globos from '../../assets/images/globos.jpg'
function ListPlaylist() {
 
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
     fetch('http://18.116.50.13:8080/playlist')
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
        
            <h2 className="namePlaylist">Playlist</h2> 
           <br></br> <div className="containerPlay">
            {playlist.map((play)=> {
                return (
                    <Playlist
                      key={play.id}
                      title={play.name}
                      songs={play.duration}
                      image={play.photoUrl}
                    />
                   
                )
               
            })}  
            </div>
        </>
    );
  }
  

  export default ListPlaylist;
