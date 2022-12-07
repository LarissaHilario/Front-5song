import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Cards from "./Cards";

function CardArtist() {
 
  const {artist}=useSelector(state=>state.artist)

  
    return (
        <>
        
           
           <br></br> <div className="containerPlay">
            {artist?.data.map((play)=> {
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
  
export default CardArtist