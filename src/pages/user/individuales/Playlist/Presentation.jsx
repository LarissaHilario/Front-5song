import { CardMedia, Typography } from '@mui/material'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import css from './artist.module.css'

const Presentation=()=> {
    const [posts, setPosts] = useState([]);
    const [artists, setArtists] = useState([]);
    const { id } = useParams();
    //const { artist } = useSelector(state => state.artist);
    useEffect(() => {
      axios.get('http://3.19.59.225:8080/playlist/'+ id )
        .then(({ data }) => {
          console.log(data);
          setPosts(data.data);
          setArtists(data.id);
          console.log(artists);
        })
        .catch(err => {
          console.log(err.message);
        });
    }, []);
    return(
        <div className={css.containerArtist}>
            <CardMedia className={css.photoArtist}
            aling='center'
            component="img"
            sx={{ width: 200, height:190, 
              marginTop:.3,
              marginLeft:22 }}
              image={posts.photoUrl}/>
            
            <Typography variant="h2" component="subtitle1" fontWeight={700} fontSize={70} color="white" align='center' className={css.nameArtist}
            sx={{marginLeft:40, marginTop:6}}>
                {posts.name}
            </Typography>
               
        </div>
    )
}

export default Presentation