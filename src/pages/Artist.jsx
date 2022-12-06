import SongList from "../components/artistPage/SongList.jsx";
import Presentation from "../components/artistPage/Presentation.jsx";
import imgSrc3 from "../assets/images/harry (3).jpg";
import AlbumList from "../components/artistPage/AlbumList.jsx";
//import "../assets/styles/artist.css"

function Artist() {

    const artist=[
        {id:"1",name:"Taylor Swift",photoUrl:imgSrc3}
    ]

    return (
        <div className='body'>

            <div className='artist-presentation'>
                <Presentation id={artist[0].id}
                              name={artist[0].name}
                              photoUrl={artist[0].photoUrl}/>

            </div>

            <div className='artist-songs'>
                <div className='titleTableSongs'>Canciones del artista</div>

                <table>
                    <tr>
                        <th className="photoSongHeader"></th>
                        <th className="nameSongHeader">Nombre</th>
                        <th className="durationSongHeader">Duración</th>
                    </tr>
                    <SongList/>
                </table>
            </div>

            <div className='artist-albums'>
                <AlbumList></AlbumList>




            </div>

        </div>
    )
}

export default Artist;