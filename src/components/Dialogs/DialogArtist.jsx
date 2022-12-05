import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "./formDialog.css"

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tables from "../../pages/admi/artist/Table";
export default function DialogArtist() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [file, setFile] = useState(); //codigo del preview
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div>
           <Button variant="outlined" startIcon={<AddCircleIcon />} color="fifth" size="large" onClick={handleClickOpen}>
                Añadir Artista
                </Button>

                <br/>
                <Tables></Tables>
            <Dialog open={open} sx={{width:500, marginLeft:60, borderRadius:4}} >
                <DialogTitle>Nuevo Artista</DialogTitle>
                <DialogContent>
                    <img src={file} className='img-conteiner' />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre"
                        fullWidth
                        variant="standard"
                        color={'fifth'}
                        
                    />
                    <Button variant="contained" component="label" color="fifth" sx={{marginTop:2,marginLeft:16}}>
                        Subir imagen
                        <input hidden accept="image/*" type="file" onChange={handleChange} />
                    </Button>     
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose} color="fifth">Cancel</Button>
                    <Button onClick={handleClose} color="fifth">Subir</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}