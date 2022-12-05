import { Button } from "@mui/material"
import Table from "../Artist/Table"
import Header from "../Header"
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
                <Button variant="outlined" startIcon={<AddCircleIcon />} color="fifth" size="large">
                Añadir Podcast
                </Button>
                
            </div>
        </>
    )
}
export default UploadPodcast