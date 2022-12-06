import { useState, useEffect } from "react";
import "./list.css"
import Podcast from "./Podcast";

function ListPodcast() {
 
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
     fetch('http://3.19.59.225:8080/podcast')
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
           <br></br> <div classame="containerPlay">
            {playlist.map((play)=> {
                return (
                    <Podcast
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
  

  export default ListPodcast;
