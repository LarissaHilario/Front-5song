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
import TablePodcast from "../../pages/admi/podcast/TablePodcast";
import { addNewPodcast } from "../../store/thunks/podcastThunk";
import { useDispatch, useSelector } from "react-redux";

export default function DialogPodcast() {
    const dispatch=useDispatch();
    const {categories}= useSelector(state => state.podcast);
    const [open, setOpen] = useState(false);
    const [song, setSong] = useState(''); // estado de las canciones
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
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
        console.log(event.target.value)
    };

    const handleChangeD = (event) => { //codigo del select
        setDescription(event.target.value);
        console.log(event.target.value)
    };
    const handleChangeA= (event) => { //codigo del select
        setDescription(event.target.value);
        console.log(event.target.value)
    };

    const handleSubmit = () => {
        if (song !== '') {
          dispatch(addNewPodcast({ name: song, description:description, category:category, photoUrl:file}));
          setOpen(false);
          setSong('');
        } else {
          console.log('No has ingresado nada');
        }
      };

    return (
        <div>
           <Button variant="outlined" startIcon={<AddCircleIcon />} color="fifth" size="large" onClick={handleClickOpen}>
                Añadir Podcast
                </Button>

                <br/>
                <TablePodcast/>

            <Dialog open={open}  sx={{ width: 500, marginLeft: 70, borderRadius: 4 }} >
                <DialogTitle>Subir Podcast</DialogTitle>
                <DialogContent>
                    <img src={file} className='img-conteiner' />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Titulo del podcast"
                        fullWidth
                        variant="standard"
                        color={'fifth'}
                        value={song}
                        onChange={handleChange}
                        
                    />
                
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Descripción"
                        fullWidth
                        variant="standard"
                        color={'fifth'}
                        value={description}
                        onChange={handleChangeD}

                    />
                    <FormControl fullWidth sx={{marginTop:1,marginBottom:2}}>
                        <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select-label"
                            label="Categoria"
                           
                            color={'fifth'}
                            value={category}
                             onChange={e => setCategory(e.target.value)}
                        >
                            <MenuItem value={"Comedia"}>Comedia</MenuItem>
                            <MenuItem value={"Terror"}>Terror</MenuItem>
                            <MenuItem value={"Salud"}>Salud</MenuItem>
                            <MenuItem value={"Entretenimiento"}>Entretenimiento</MenuItem>
                            <MenuItem value={"Deportes"}>Deportes</MenuItem>
    
                        </Select>
                    </FormControl>

                 
                    <Input type="file" multiple accept=".mp3,.mp4,audio/*"  sx={{marginTop:2,width: 388}}/>

                    <Button variant="contained" component="label"  color='fifth'sx={{marginLeft:16, marginTop:2}}>
                        Subir imagen
                        <input hidden accept="image/*" type="file"  onChange={handleChangeImg} />
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button  color='fifth' onClick={handleClose}>Cancel</Button>
                    <Button color='fifth'onClick={handleSubmit} >Subir</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}