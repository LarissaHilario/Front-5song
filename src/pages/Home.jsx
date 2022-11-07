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

const Home = () => {
    //     const [currMusic, setCurrMusic] = useState(playing);
    //   const {playing} = useState(state => state.musicReducer);

    //     useEffect(() => {
    //         setCurrMusic(playing)
    //     }, [playing]);

    return (
        <div className="body">
            <div className="Header">
                <Header title={'Home'} Name={'Larissa'} avatar={person}></Header>
                <Card image={person} button={'Explorar ahora'} title={'Explora toda la música relevante en este momento'}></Card>
            
            </div>
        </div>
    )
}
export default Home