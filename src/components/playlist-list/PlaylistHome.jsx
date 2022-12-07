import { useState, useEffect } from "react";
import "./list.css"
import Playlist from "./Playlist";
import globos from '../../assets/images/globos.jpg'
import { useSelector } from "react-redux";
function PlaylistHome() {
 
  const {playlist}=useSelector(state=>state.playlist)
    return (
        <>
        
           
           <br></br> <div className="containerPlay">
            {playlist?.data.slice(0,4).map((play)=> {
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
  

  export default PlaylistHome;
