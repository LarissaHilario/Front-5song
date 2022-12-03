
import { useState, useEffect } from 'react';
import './playlist.css'
import Card2 from './Card2';

function Playlist1() {
    const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
     fetch('http://3.135.19.149:8080/song',{
        mode: 'no-cors', 
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
            
            </div>
            
        </>
    )
 
}
export default Playlist1;