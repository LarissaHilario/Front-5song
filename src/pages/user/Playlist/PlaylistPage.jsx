import { Button } from "@mui/material"
import Header from "../../../components/Header/Header"
import ListPlaylist from "../../../components/playlist-list/ListPlaylist"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DialogPlaylist from "../../../components/Dialogs/DialogPlaylist";
const PlaylistPage=()=>{
    return(
        <div className="body">
                <section>
                     <div className="Header">
                    <Header title={'Playlist'} Name={"Aylin"}></Header>
                </div>
                </section>
               <br></br>
                <DialogPlaylist/>
                <div className="Playlist">
                    <ListPlaylist/>
                </div>
            </div>
            )
   
    }
export default PlaylistPage