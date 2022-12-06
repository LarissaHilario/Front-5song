import SongList from "../../../../components/artistPage/SongList.jsx";
import Presentation from "../../../../components/artistPage/Presentation.jsx";
import AlbumList from "../../../../components/artistPage/AlbumList.jsx";
import { Typography } from "@mui/material";
import Header from "../../../../components/Header/Header.jsx";
import TableSongs from "./TablesSongs.jsx";
import AlbumCards from "./AlbumCards.jsx";
//import "../assets/styles/artist.css"

function Artist() {


    
    return (
        <div className='body'>
            <Header title={"Artista"} Name={'Larissa'}></Header>
            <div className='artist-presentation'>
                <Presentation></Presentation>

            </div>
            

            <Typography variant='h4' fontWeight={700} color={'#1E1A3D'}>Canciones más populares</Typography>

                <TableSongs></TableSongs>
            <br></br>
            <div className='artist-albums'>
            <Typography variant='h4' fontWeight={700} color={'#1E1A3D'}>Álbumes</Typography>
                <AlbumCards></AlbumCards>




            </div>
            
</div>
    )
}

export default Artist;