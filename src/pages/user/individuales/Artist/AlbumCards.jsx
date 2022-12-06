import { useState, useEffect } from "react";

import Cards from "../../../../components/artist/Cards";

function AlbumCards() {
 
  const [artist, setArtist] = useState([]);

  useEffect(() => {
     fetch('http://3.19.59.225:8080/album')
        .then((response) => response.json())
        .then((data) => {
           console.log(data.data);
           setArtist(data.data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
    return (
        <>
        
           
           <br></br> <div className="containerPlay">
            {artist.map((play)=> {
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
  
export default AlbumCards