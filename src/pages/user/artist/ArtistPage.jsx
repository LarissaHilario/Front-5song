import { Button } from "@mui/material"
import Header from "../../../components/Header/Header"
import ListPlaylist from "../../../components/playlist-list/ListPlaylist"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListArtist from "../../../components/artist/ListArtist";
import CardArtist from "../../../components/artist/cardArtist";
import './artist.css'
import ReactScrollablleFeed from 'react-scrollable-feed'
const ArtistPage=()=>{
    return(
        <div className="body">
                <section>
                     <div className="Header">
                    <Header title={'Artistas'} Name={"Aylin"}></Header>
                </div>
                </section>
               
               <ReactScrollablleFeed className="scroll" >
                <section className="Artist">
                   <CardArtist/>
                </section>
                <br/><br/><br/><br/><br/><br/><br/>
               </ReactScrollablleFeed>
            </div>
            )
   
    }
export default ArtistPage