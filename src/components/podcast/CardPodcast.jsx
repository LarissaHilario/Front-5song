import React from "react";
import "./cardPodcast.css";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { useNavigate } from "react-router-dom";
//<button className="button1"> <span><br/>Duración:{songs}</span><PlayCircleFilledIcon/></button>

const Podcast=({title,image,ep, key})=> {
    const navigate = useNavigate();
const handleClick = ()=>{
navigate(`/podcast/${key}`)
}
    return (
        <div className="container-card" onClick={handleClick}>
            <img className="imagePlay" src={image} />
            <div className="card-title">
                <h3>{title}</h3>
            </div>
        </div> 
    )
    }
    export default Podcast;