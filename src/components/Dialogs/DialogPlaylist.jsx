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
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false);

    const handleChangeName = (event) => setName(event.target.value)
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
    const handleSubmit = (event) => {
        event.preventDefault();

        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                name: name
            })
        }
        fetch('http://18.222.203.69:8080/playlist', option)
        .then (response => response.json())
        .then ( data => data.status ? alert('Registro exitoso') : alert('Ha ocurrido un error'))
        .catch (err => console.log(err))
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
                    <img src={file} className='img-conteiner'/>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Titulo"
                        fullWidth
                        variant="standard"
                        color={'primary'}
                        value={name} 
                        onChange={handleChangeName}
                    />
                    <Button variant="contained" component="label" sx={{marginTop:2,marginLeft:16}}>
                        Subir imagen
                        <input hidden accept="image/*" type="file" onChange={handleChange}  />
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

