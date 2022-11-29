const Song=({name,duration,photoUrl})=>{
    return(
        <div className="containerSong">
            <img className="Photo" src={photoUrl} />
            <div className="name">{name}</div>
            <div className="duration">{duration}</div>
        </div>
    )
}

export default Song