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
    const [url,setUrl]=useState();
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

      const handleSubmitAll = () => {
        if (artist !== '') {
          dispatch(addNewArtist({ name: artist, photoUrl:url}));
          setOpen(false);
          setArtist('');
        } else {
          console.log('No has ingresado nada');
        }
      };
  
      const handleSubmit=  (event)=>{
        event.preventDefault();
      let formdata= new FormData();
        formdata.append('file', file);
        axios.post("http://3.19.59.225:8080/artist/upload/photo",
        formdata).then((res)=>{
            console.log(res.data.data)
            setUrl(res.data.data)
        },(error)=>{console.log(error)})
    }
  
  const handleChangeForm=(e)=>{
    console.log(e.target.files[0])
    setFile(e.target.files[0])

}

    return (
        <div>
           <Button variant="outlined" startIcon={<AddCircleIcon />} color="fifth" size="large" onClick={handleClickOpen}>
                Añadir Artista
                </Button>

                <br/>
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
                  
                    <div>
                    <label htmlFor="File">File: </label> 
                    <input id="file" type="file"  onChange={handleChangeForm}></input>
                </div>

                        
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose} color="fifth">Cancel</Button>
                    <Button color="fifth" disabled={file === ''} onClick={handleSubmit} >Subir imagen</Button>
                    <Button color="fifth" disabled={artist === ''} onClick={handleSubmitAll} >Subir Artista</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}