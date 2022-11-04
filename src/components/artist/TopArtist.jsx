import './topArtist.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const TopArtist=({name,avatar})=>{
    return(
        <div className="container-artist">
            <img className="avatar" src={avatar} />
            <div className="name">
                <h2>{name}</h2>
            </div>
        </div> 
        
    )
}

export default TopArtist