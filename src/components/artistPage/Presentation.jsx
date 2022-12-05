import css from '../../assets/styles/artist.css'

const Presentation=({id, name,photoUrl})=> {
    return(
        <div className="container-Artist">
            <img className="photoArtist" src={photoUrl} alt="wataboi"/>
            <div className="nameArtist">{name}</div>

        </div>
    )
}

export default Presentation