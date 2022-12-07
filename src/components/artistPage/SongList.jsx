import Song from './Song.jsx'
import {useEffect, useState} from "react";

const SongList=()=>{
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch('http://18.222.203.69:8080/song')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data);
                setSongs(data.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>


            {songs.slice(0,5).map((song)=> {
                return (

                    <tr>

                        <Song
                            key={song.id}
                            name={song.name}
                            duration={song.duration}
                            photo={song.photoUrl}
                        />

                    </tr>


                )
            })}
        </>
    )
}

export default SongList