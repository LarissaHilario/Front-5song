import "../playlist-list/playlist.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
const Playlist=(props)=> {
    return (
        <div className="container-card">
            <img className="imagePlay" src={image} />
            <div className="card-title">
                <h2>{props.title}</h2>
                <h3>{title}</h3>
            </div>
            
        </div> 
    )
    }
    export default Playlist