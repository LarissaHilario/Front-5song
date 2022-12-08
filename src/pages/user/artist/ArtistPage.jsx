import { Button } from "@mui/material"
import Header from "../../../components/Header/Header"
import ListPlaylist from "../../../components/playlist-list/ListPlaylist"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListArtist from "../../../components/artist/ListArtist";
import CardArtist from "../../../components/artist/cardArtist";
import ReactScrollablleFeed from 'react-scrollable-feed'
import './artist.css'
const ArtistPage=()=>{
    return(
        <div className="body">
              <ReactScrollablleFeed>
                <section>
                     <div className="Header">
                    <Header title={'Artistas'} Name={"Aylin"}></Header>
                </div>
                </section>
               <br></br>
             
               <div className="Artist">
                   <CardArtist/>
                </div>
               </ReactScrollablleFeed>
                
            </div>
            )
   
    }
export default ArtistPage