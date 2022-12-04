import "../playlist-list/playlist.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
//<button className="button1"> <span><br/>Duración:{songs}</span><PlayCircleFilledIcon/></button>

const Playlist=({title,image,songs})=> {
    return (
        <div className="container-card">
            <img className="imagePlay" src={image} />
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            
        </div> 
    )
    }
    export default Playlist