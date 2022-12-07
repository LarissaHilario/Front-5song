import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tables from "../../pages/admi/song/TableSong";
import { useSelector } from "react-redux";
export default function DialogSong() {
    const { artist } = useSelector(state => state.artist);
    const { album } = useSelector(state => state.album)
    const [open, setOpen] = React.useState(false);
    const [song, setSong] = React.useState(''); // estado de las canciones
    const [songUrl,setSongUrl]=useState()
    const [artista,setArtista]=useState()
    const [albums,setAlbum]=useState()
    const [duration,setDuration]=useState()

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [file, setFile] = useState(); //codigo del preview

    function handleChangeImg(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleChange = (event) => { //codigo del select
        setSong(event.target.value);
    };
    const handleSubmitAll = () => {
        if (song !== '') {
          dispatch(addNewPlaylist({ name: song, duration:duration, photoUrl:url,songUrl:songUrl}));
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

  
  const handleChangeName = (event) => {
    setSong(event.target.value)
console.log(event.target.value)}
const handleChangeDuration = (event) => {
    setDuration(event.target.value)
console.log(event.target.value)}


    return (
        <div>
            <Button variant="outlined" startIcon={<AddCircleIcon />} color="fifth" size="large" onClick={handleClickOpen}>
                Añadir Cancion
                </Button>

                <br/>
                <Tables></Tables>
            <Dialog open={open} sx={{ width: 500, marginLeft: 60, borderRadius: 4 }} >
                <DialogTitle>Subir Cancion</DialogTitle>
                <DialogContent>
                    <img src={file} className='img-conteiner' />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre de la cancion"
                        fullWidth
                        variant="standard"
                        color='fifth'
                        value={song}
                        onChange={handleChangeName}
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Duracion"
                        label="Duracion"
                        fullWidth
                        variant="standard"
                        color='fifth'
                        value={duration}
                        onChange={handleChangeDuration}

                    />
                     <label htmlFor="File">File: </label> 
                    <input id="file" type="file"  onChange={handleChangeForm}></input>
                    <Button variant="contained" component="label" sx={{marginTop:2,marginLeft:16}} onClick={handleSubmit}>
                        Subir imagen
                        

                    </Button>     

                    <FormControl fullWidth sx={{marginTop:2,marginBottom:2}}>
                        <InputLabel id="demo-simple-select-label " color="fifth">Artista</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Artista"
                           
                            color='fifth'
                            value={artista}
                            onChange={e => setArtista(e.target.value)}
                       >
                        {artist?.data.map( artist=> (
                    <MenuItem key={artist.id} value={artist.name}>
                        {artist.name}
                    </MenuItem>
                    ))}
                        
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" color="fifth">Album</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select-Label"
                            value={albums}
                            label="Album"
                            
                            color='fifth'
                            
                            onChange={e => setAlbum(e.target.value)}
                       >
                        {album?.data.map( album=> (
                    <MenuItem key={album.id} value={album.name}>
                        {album.name}
                    </MenuItem>
                    ))}
                        </Select>
                    </FormControl>
                    <Input type="file" accept=".mp3,.mp4,audio/*" color="fifth" sx={{marginTop:2,width: 386}} value={songUrl}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='fifth'>Cancel</Button>
                    <Button onClick={handleClose} color='fifth'>Subir</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}