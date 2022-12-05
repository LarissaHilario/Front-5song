import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "./formDialog.css"
import ListPlaylist from "../playlist-list/ListPlaylist";
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function DialogPlaylist() {

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
            <Button variant="outlined" startIcon={<AddCircleIcon />} size="large" onClick={handleClickOpen}>
                Crear playlist
                </Button>
                <div className="Playlist">
                    <ListPlaylist/>
                </div>
            <Dialog open={open} sx={{width:500, marginLeft:60, borderRadius:4}} >
                <DialogTitle>Nueva Playlist</DialogTitle>
                <DialogContent>
                    <img src={file} className='img-conteiner' />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Titulo"
                        fullWidth
                        variant="standard"
                        color={'primary'}
                        
                    />
                    <Button variant="contained" component="label" sx={{marginTop:2,marginLeft:16}}>
                        Subir imagen
                        <input hidden accept="image/*" type="file" onChange={handleChange} />
                    </Button>     
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Crear</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

