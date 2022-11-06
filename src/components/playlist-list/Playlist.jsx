import "../playlist-list/playlist.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const Playlist=({title,image,songs})=> {
    return (
        <>
        <div className="container-card">
            <img className="image" src={image} />
            <div className="card-title">
                <h2>{title}</h2>
            </div>
            <button className="button1"> <p>{songs}</p><PlayCircleFilledIcon/></button>
        </div> 
        </>
    )
    }
    export default Playlist