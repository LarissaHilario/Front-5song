import Song from './Song.jsx'

const SongList=({songsartist})=>{
    //const [songs, setSongs] = useState([]);

    /*useEffect(() => {
        fetch('http://3.135.19.149:8080/artist?_limit=7')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data);
                setSongs(data.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);*/

    return (
        <>


            {songsartist.map((song)=> {
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