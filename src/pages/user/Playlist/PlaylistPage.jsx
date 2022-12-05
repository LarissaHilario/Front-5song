
import DialogPlaylist from "../../../components/Dialogs/DialogPlaylist"
import Header from "../../../components/Header/Header"


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
            </div>
            )
   
    }
export default PlaylistPage