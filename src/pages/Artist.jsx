import SongList from "../components/artistPage/SongList.jsx";
import Presentation from "../components/artistPage/Presentation.jsx";
import imgSrc from "../assets/artwork.jpg";
import imgSrc2 from "../assets/artwork2.jpg";
import imgSrc3 from "../assets/artwork3.jpg";
import wataboi from "../assets/images/wataboi.jpeg"

function Artist() {
    const songsbyartist=[
        {id:"1",name:"Cali",duration:"5:54",photoUrl:imgSrc},
        {id:"2",name:"50",duration:"5:45",photoUrl:imgSrc2},
        {id:"3",name:"I Wonder",duration:"3:34",photoUrl:imgSrc3}
    ]

    const artist=[
        {id:"1",name:"Wataboi",photoUrl:wataboi}
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
                <SongList songsartist={songsbyartist}/>
            </div>

            <div className='artist-albums'>


            </div>

        </div>
    )
}

export default Artist;