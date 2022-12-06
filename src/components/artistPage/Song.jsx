//import "../../assets/styles/artist.css"

const Song=({name,duration,photoUrl})=>{
    return(
        <>
            <td className="PhotoSong"><img src={photoUrl} /></td>
            <td className="nameSong">{name}</td>
            <td className="durationSong">{duration}</td>
        </>
    )
}

export default Song