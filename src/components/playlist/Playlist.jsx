
import { useState, useEffect } from 'react';
import './album.css'
import Card2 from './Card2';

function Playlist1() {
    const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
     fetch('http://18.116.50.13:8080/song')
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
            <div className='portada'>
                <div className='img-portada'>
                
                </div>
                <h2 className='tituloP'>Aylin</h2>
                <button>+ Agregar Cancion</button>
            </div>
            
            <div className="lista">   
            <button className='btnAlbum'>← Back</button>
            {playlist.map((user) => {
                return (
                    <Card2
                        key={user.id}
                        autor={user.artist}
                        title={user.name}
                        img={user.photoUrl}
                        duration={user.duration}
                    />
                );
            })}
            </div>
            </div>
            
        </>
    )
 
}
export default Playlist1;