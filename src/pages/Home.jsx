import React from 'react';
// import {useSelector} from 'react-redux';
import person from '../assets/images/person2.png'

import styles from '../components/shared/styles.css'
import Card from '../components/card/Card';
import ListArtist from '../components/artist/ListArtist';
import ListPlaylist from '../components/playlist-list/ListPlaylist';
import Player from '../components/Player/Player';
import Header from '../components/Header/Header';
import { Typography } from '@mui/material';
import PlaylistHome from '../components/playlist-list/PlaylistHome';

const Home = () => {
    //     const [currMusic, setCurrMusic] = useState(playing);
    //   const {playing} = useState(state => state.musicReducer);

    //     useEffect(() => {
    //         setCurrMusic(playing)
    //     }, [playing]);

    return (
       
            <div className="body">
                <section>
                     <div className="Header">
                    <Header title={'Home'} avatar={person} Name={"larissa"}></Header>
                </div>
                </section>
                <div className="Card-Home">
                <Card title={"Explora toda la música en tendencia en estos momentos"}
                    image={person} button={"Explorar ahora"} />
            </div>
              
               
                    <ListArtist/>
                    <br></br>
                <div className="Playlist">
                <h2 className="namePlaylist">Playlist</h2> 
                    <PlaylistHome/>
                </div>
            </div>    
    )
}
export default Home