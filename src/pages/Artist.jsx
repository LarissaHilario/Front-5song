import SongList from "../components/artistPage/SongList.jsx";
import Presentation from "../components/artistPage/Presentation.jsx";
import imgSrc from "../assets/images/globos.jpg";
import imgSrc2 from "../assets/images/harry (2).jpg";
import imgSrc3 from "../assets/images/harry (3).jpg";
import wataboi from "../assets/images/harry (1).jpg"
import AlbumList from "../components/artistPage/AlbumList.jsx";
//import "../assets/styles/artist.css"

function Artist() {
    const songsbyartist=[
        {id:"1",name:"Cali",duration:"5:54",photoUrl:imgSrc},
        {id:"2",name:"50",duration:"5:45",photoUrl:imgSrc2},
        {id:"3",name:"I Wonder",duration:"3:34",photoUrl:imgSrc3}
    ]

    const artist=[
        {id:"1",name:"Taylor Swift",photoUrl:imgSrc3}
    ]


    console.log(artist)
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
                    <SongList songsartist={songsbyartist}/>
                </table>
            </div>

            <div className='artist-albums'>
                <AlbumList></AlbumList>




            </div>

        </div>
    )
}

export default Artist;