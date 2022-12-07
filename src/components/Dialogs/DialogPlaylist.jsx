import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "./formDialog.css"
import {addNewPlaylist} from '../../store/thunks/playlistThunk'
import { useDispatch } from "react-redux";


export default function DialogPlaylist() {

    const dispatch=useDispatch();
    const [open, setOpen] = useState(false);
    const [playlist,setPlaylist]=useState('')

    const handleChangeName = (event) => {
        setPlaylist(event.target.value)
    console.log(event.target.value)}

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

    const handleSubmit = () => {
        if (playlist !== '') {
          dispatch(addNewPlaylist({ name: playlist, photoUrl:file}));
          setOpen(false);
          setPlaylist('');
        } else {
          console.log('No has ingresado nada');
        }
      };

    
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Crear Playlist
            </Button>
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
                        value={playlist} 
                        onChange={handleChangeName}
                    />
                    <Button variant="contained" component="label" sx={{marginTop:2,marginLeft:16}}>
                        Subir imagen
                        <input hidden accept="image/*" type="file" onChange={handleChange} value={file} />
                    </Button>     
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button disabled={playlist === ''} onClick={handleSubmit} >Crear</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

