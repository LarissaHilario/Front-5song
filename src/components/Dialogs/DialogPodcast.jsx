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

export default function DialogPodcast() {

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
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Autor"
                        fullWidth
                        variant="standard"
                        color={'fifth'}

                    />
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Descripcion"
                        fullWidth
                        variant="standard"
                        color={'fifth'}

                    />
                    <FormControl fullWidth sx={{marginTop:1,marginBottom:2}}>
                        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Categoria"
                            onChange={handleChange}
                            color={'fifth'}
                        >
                            <MenuItem value={10}>Suspenso</MenuItem>
                            <MenuItem value={10}>Fantasia</MenuItem>
                            <MenuItem value={10}>Amor</MenuItem>
                            <MenuItem value={10}>Historia</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Año</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            
                            label="Año"
                            onChange={handleChange}
                            color={'fifth'}
                        >
                            <MenuItem value={20}>2019</MenuItem>
                            <MenuItem value={20}>2020</MenuItem>
                            <MenuItem value={20}>2021</MenuItem>
                            <MenuItem value={20}>2022</MenuItem>
                            
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
                    <Button color='fifth' onClick={handleClose}>Subir</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}