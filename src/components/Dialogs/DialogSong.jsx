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
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Autor"
                        fullWidth
                        variant="standard"
                        color='fifth'

                    />
                    <Button variant="contained" component="label"  sx={{marginLeft:16, marginTop:5}} color='fifth'>
                        Subir imagen
                        <input hidden accept="image/*" type="file" onChange={handleChangeImg} />
                    </Button>

                    <FormControl fullWidth sx={{marginTop:2,marginBottom:2}}>
                        <InputLabel id="demo-simple-select-label">Artista</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Artista"
                           
                            color='fifth'
                            value={song}
                            onChange={e => setSong(e.target.value)}
                       >
                        {artist?.data.map( artist=> (
                    <MenuItem key={artist.id} value={artist.category}>
                        {artist.name}
                    </MenuItem>
                    ))}
                        
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Album</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={song}
                            label="Album"
                            
                            color='fifth'
                            
                            onChange={e => setSong(e.target.value)}
                       >
                        {album?.data.map( artist=> (
                    <MenuItem key={album.id} value={album.category}>
                        {album.name}
                    </MenuItem>
                    ))}
                        </Select>
                    </FormControl>
                    <Input type="file" accept=".mp3,.mp4,audio/*" sx={{marginTop:2,width: 386}}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='fifth'>Cancel</Button>
                    <Button onClick={handleClose} color='fifth'>Subir</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}