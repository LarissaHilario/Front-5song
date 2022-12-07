import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "./formDialog.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tables from "../../pages/admi/artist/Table";
import { addNewArtist } from "../../store/thunks/artistThunk";
import axios from "axios";

export default function DialogArtist() {
    const dispatch=useDispatch();
    const [artist, setArtist] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [file, setFile] = useState(); //codigo del preview
    const [files, setFiles] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
      const handleChangeArtist = e => {
        setArtist(e.target.value);
        console.log(e.target.value)
      };

      const handleSubmit = () => {
        if (artist !== '') {
          dispatch(addNewArtist({ name: artist, photoUrl:files}));
          setOpen(false);
          setArtist('');
        } else {
          console.log('No has ingresado nada');
        }
      };

      const NewPhoto= () => {
            axios.post('http://3.19.59.225:8080/artist/upload/photo',{
              
            body:{
             file
              }
            .then(resp => { resp.Json()
              setFiles(resp.data)
              console.log(resp);
            })
            .catch(err => {
              console.log(err);
            })
        
              });}
    return (
        <div>
           <Button variant="outlined" startIcon={<AddCircleIcon />} color="fifth" size="large" onClick={handleClickOpen}>
                Añadir Artista
                </Button>

                <br/><br/>
                
                <Tables></Tables>
            <Dialog open={open} sx={{width:500, marginLeft:70, borderRadius:4}} >
                <DialogTitle>Nuevo Artista</DialogTitle>
                <DialogContent>
                    <img src={file} className='img-conteiner' />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre del artista"
                        fullWidth
                        variant="standard"
                        color={'fifth'}
                        value={artist}
                        onChange={handleChangeArtist}
                    />
                    <Button variant="contained" component="label" color="fifth" sx={{marginTop:2,marginLeft:16}} onClick={NewPhoto}>
                        Subir imagen
                        <input hidden accept="image/*" type="file" onChange={handleChange} name="file" value={file}/>
                    </Button>     
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose} color="fifth">Cancel</Button>
                    <Button color="fifth" disabled={artist === ''} onClick={handleSubmit} >Subir</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}