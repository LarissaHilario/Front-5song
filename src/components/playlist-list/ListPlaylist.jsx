import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./list.css"
import Playlist from "./Playlist";
function ListPlaylist() {
  const { playlist} = useSelector(state => state.playlist);


 
    return (
        <>           
           <br></br> <div className="containerPlay">
            {playlist?.data.map((play)=> {
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
