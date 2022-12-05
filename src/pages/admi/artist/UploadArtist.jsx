import { Button } from "@mui/material"
import Header from "../Header"
import Tables from "./Table"
import AddCircleIcon from '@mui/icons-material/AddCircle';
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
                <Button variant="outlined" startIcon={<AddCircleIcon />} color="fifth" size="large">
                Añadir Artista
                </Button>

                <br/>
                <Tables></Tables>
                
            </div>
        </>
    )
}
export default UploadArtist