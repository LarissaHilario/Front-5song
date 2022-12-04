import { Button } from "@mui/material"
import Header from "../../../components/Header/Header"

import AddCircleIcon from '@mui/icons-material/AddCircle';
const UploadArtist=()=>{
    return(
        <>
        <div className="body">
                <section>
                     <div className="Header">
                    <Header title={'Artistas'} Name={"Aylin"}></Header>
                </div>
                </section>
               <br></br>
               <Button variant="outlined" startIcon={<AddCircleIcon />} color='fifth'size="large">
                Añadir artista
                </Button>
                <div className="table">
                  
                </div>
            </div>
        </>
    )
}

export default UploadArtist