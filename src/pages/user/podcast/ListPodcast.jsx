import { useState, useEffect } from "react";
import "./list.css"
import Playlist from "../../../components/playlist-list/Playlist";
import { useSelector } from "react-redux";
function ListPodcast() {
  const {podcast}=useSelector(state=>state.podcast)

 
    return (
        <>
        
           
           <br></br> <div classame="containerPlay">
            {podcast?.data.map((play)=> {
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
  

  export default ListPodcast;
