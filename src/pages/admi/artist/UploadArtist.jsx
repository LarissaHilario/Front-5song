import { Button } from "@mui/material"
import Header from "../Header"

import DialogArtist from "../../../components/Dialogs/DialogArtist";
const UploadArtist=()=>{
    return(
        <>
        <div className="body">
                <section>
                     <div className="Header">
                    <Header title={'Artista'} Name={"larissa"}></Header>
                </div>
               
                </section> 
                <br></br>
                
                <DialogArtist></DialogArtist>
                
            </div>
        </>
    )
}
export default UploadArtist