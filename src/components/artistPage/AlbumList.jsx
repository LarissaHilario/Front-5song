import Album from './Album.jsx';
import {useEffect, useState} from "react";

const AlbumList=()=>{
    const [album, setAlbums] = useState([]);

    useEffect(() => {
        fetch('http://18.116.50.13:8080/album')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data);
                setAlbums(data.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    },[] );
    return (
        <>

            <h2 className="nameAlbums">Albums</h2>
            <br/> <div className="containerAlbums">
            {album.map((album)=> {
                return (
                    <Album
                        key={album.id}
                        name={album.name}
                        songs={album.duration}
                        image={album.photoUrl}
                    />

                )

            })}
        </div>
        </>
    );

}

export default AlbumList;