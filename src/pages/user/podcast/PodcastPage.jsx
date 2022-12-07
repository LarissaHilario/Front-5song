import { Button } from "@mui/material"
import Header from "../../../components/Header/Header"
import ListPlaylist from "../../../components/playlist-list/ListPlaylist"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListPodcast from "./ListPodcast";
import ReactScrollablleFeed from 'react-scrollable-feed'
const PodcastPage=()=>{
    return(
        <div className="body">
                <section>
                     <div className="Header">
                    <Header title={'Podcast'} Name={"Aylin"}></Header>
                </div>
                </section>
               <br></br>
               <ReactScrollablleFeed >
               <section className="Playlist">
                    <ListPodcast/>
                </section>
                <br/><br/><br/><br/><br/><br/><br/>
               </ReactScrollablleFeed>
              
            </div>
            )
   
    }
export default PodcastPage