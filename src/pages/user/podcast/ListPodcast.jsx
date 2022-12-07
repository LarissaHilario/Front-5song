import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./list.css"
import Podcast from "./Podcast";

function ListPodcast() {
  const {podcast}=useSelector(state=>state.podcast)

 
    return (
        <>
           <br></br> <div classame="containerPlay">
            {podcast?.data.map((play)=> {
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
