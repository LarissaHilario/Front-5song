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
import AddCircle from "@mui/icons-material/AddCircle";
import ListPlaylist from "../playlist-list/ListPlaylist";
import axios from "axios";

export default function DialogPlaylist() {

    const dispatch=useDispatch();
    const [open, setOpen] = useState(false);
    const [playlist,setPlaylist]=useState('')
    const [url,setUrl]=useState('')
    const [description,setDescription]=useState('')

    const handleChangeName = (event) => {
        setPlaylist(event.target.value)
    console.log(event.target.value)}

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
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

      const handleSubmitAll = () => {
        if (playlist !== '') {
          dispatch(addNewPlaylist({ name: playlist, description:description,duration:0, photoUrl:url}));
          setOpen(false);
          setPlaylist('');
        } else {
          console.log('No has ingresado nada');
        }
      };
  
      const handleSubmit=  (event)=>{
        event.preventDefault();
      let formdata= new FormData();
        formdata.append('file', file);
        axios.post("http://3.19.59.225:8080/playlist/upload/photo",
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
            <Button variant="outlined" startIcon={<AddCircle/>} size="large" onClick={handleClickOpen}>
                Crear playlist
                </Button>
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
                        value={playlist} 
                        onChange={handleChangeName}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Descripción"
                        fullWidth
                        variant="standard"
                        color={'primary'}
                        value={description}
                        onChange={handleChangeDescription}
                    />
                    <label htmlFor="File">File: </label> 
                    <input id="file" type="file"  onChange={handleChangeForm}></input>
                    <Button variant="contained" component="label" sx={{marginTop:2,marginLeft:16}} onClick={handleSubmit}>
                        Subir imagen
                        

                    </Button>     
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button disabled={playlist === ''} onClick={handleSubmitAll} >Crear</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

