
import { useState, useEffect } from 'react';
import './playlist.css'

function Playlist1() {
    const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
     fetch('http://3.135.19.149:8080/song',{
      
     })
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
        <div className="conteiner-playlist">
            <div className='card-playlist'>
                <img src='/images/logo2.png'></img>
                <div className='card-info'>
                <p>soy playlist 1</p>
                <p>del artista</p>
                </div>
            </div>    
        </div>
        <div className="conteiner-playlist">
            <div className='card-playlist'>
                <img src='/images/logo2.png'></img>
                <div className='card-info'>
                <p>soy playlist 1</p>
                <p>del artista</p>
                </div>
            </div>    
        </div>
            
        </>
    )
 
}
export default Playlist1;