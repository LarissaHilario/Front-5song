import { Button } from "@mui/material"

import Header from "../Header"
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Songs=()=>{
    return(
        <>
        <div className="body">
                <section>
                     <div className="Header">
                    <Header title={'Canciones'} Name={"larissa"}></Header>
                </div>
                </section>
                <br></br>
                <Button variant="outlined" startIcon={<AddCircleIcon />} color="fifth" size="large">
                Añadir Canción
                </Button>
                
            </div>
        </>
    )
}
export default Songs