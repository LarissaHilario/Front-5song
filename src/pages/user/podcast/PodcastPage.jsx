import { Button } from "@mui/material"
import Header from "../../../components/Header/Header"
import ListPlaylist from "../../../components/playlist-list/ListPlaylist"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Podcast from "./Podcast";

const PodcastPage=()=>{
    return(
        <div className="body">
                <section>
                     <div className="Header">
                    <Header title={'Podcast'} Name={"Aylin"}></Header>
                </div>
                </section>
               <br></br>
                <div className="Playlist">
                    <Podcast/>
                </div>
            </div>
            )
   
    }
export default PodcastPage