import './topArtist.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Avatar } from '@mui/material';
const TopArtist=({name,avatar})=>{
    return(
        <div className="container-artist">
            <div className='avatar'>
                 <Avatar src={avatar} 
          sx={{ width: 80, height: 80 }}
          variant= 'circular'/>
            </div>
         
            <div className="name">
                <h2>{name}</h2>
            </div>
        </div> 
        
    )
}

export default TopArtist