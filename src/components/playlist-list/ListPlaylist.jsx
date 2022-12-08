import { useState, useEffect } from "react";

import "./list.css"
import "./playlist.module.css"
import Playlist from "./Playlist";
import { useSelector } from "react-redux";
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
                      id={play.id}
                    />
                   
                )
               
            })}  
            </div>
        </>
    );
  }
  

  export default ListPlaylist;
