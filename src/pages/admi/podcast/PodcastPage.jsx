import { Button } from "@mui/material"
import Table from "../Artist/Table"
import Header from "../Header"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DialogPodcast from "../../../components/Dialogs/DialogPodcast";
import ReactScrollablleFeed from 'react-scrollable-feed'
const UploadPodcast=()=>{
    return(
        <>
        <div className="body">
                <section>
                     <div className="Header">
                    <Header title={'Podcast'} Name={"larissa"}></Header>
                </div>
                </section>
                <br></br>
                <ReactScrollablleFeed >
                <DialogPodcast/>
                </ReactScrollablleFeed>
                
                
            </div>
        </>
    )
}
export default UploadPodcast