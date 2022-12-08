import SongList from "../../../../components/artistPage/SongList.jsx";
import Presentation from "./Presentation";
import AlbumList from "../../../../components/artistPage/AlbumList.jsx";
import { Typography } from "@mui/material";
import Header from "../../../../components/Header/Header.jsx";
import TableSongs from "./TablesSongs.jsx";
import { useParams } from "react-router-dom";

//import "../assets/styles/artist.css"

function PlaylistSingle() {
    const { id } = useParams();
    return (
        <div className='body'>
            <Header title={"Artista"} Name={'Larissa'}></Header>
            <div className='artist-presentation'>
                <Presentation></Presentation>

            </div>
            

            <Typography variant='h4' fontWeight={700} color={'#1E1A3D'}>Canciones</Typography>

                <TableSongs></TableSongs>
            <br></br>
            
</div>
    )
}

export default PlaylistSingle;