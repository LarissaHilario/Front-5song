import React,{ useState, useEffect } from 'react'
import Header from '../../../components/Header/Header';
import Navbar from '../../../layouts/Navbar';
import Playlist from '../../../components/playlist-list/Playlist';
import TopArtist from '../../../components/artist/TopArtist';
import './library.css'
import Podcast from '../podcast/Podcast';
import Cards from '../../../components/artist/Cards';
import CardArtist from '../../../components/artist/cardArtist';
import ReactScrollablleFeed from 'react-scrollable-feed'
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector } from 'react-redux';

const Library = () => {
  const {artist}=useSelector(state=>state.artist)

  const {playlist}= useSelector(state=>state.playlist);
  const {podcast}=useSelector(state=>state.podcast)
 
  return (
    <div className='body'>
    {/* <Navbar/> */}
  <Header title={'Library'}/> <br />
  <ReactScrollablleFeed>
    
    <section className='section-1'>
   <h1>Playlist</h1>
   <br/>
   <Button variant="outlined" startIcon={<AddCircleIcon />} size="small"  href='/playlist' sx={{width:110}}>
                Ver más
        </Button>
        <div className='option-1' id='Playlist'>
          {playlist?.data.slice(0,7).map((play,i) => {
        
            return (
                <Playlist
                  key={i}
                  title={play.name}
                  songs={play.duration}
                  image={play.photoUrl}
                />
            )
          
        })}</div><br />
    </section>
    
    <section className='section-2' >
      
   <h1>Podcast</h1>
   <br/>
   <Button variant="outlined" startIcon={<AddCircleIcon />} size="small"  href='/podcast' sx={{width:110}}>
                Ver mas
        </Button>
        <div className='option-2' id='Playlist'>
          {podcast?.data.slice(0,7).map((play, i) => {
         
            return (
                <Podcast
                  key={i}
                  title={play.name}
                  songs={play.duration}
                  image={play.photoUrl}
                />
            )
        
        })} </div><br />

    </section>
    <section className='section-3'>
   <h1>Artistas</h1>
   <br/>
   <Button variant="outlined" startIcon={<AddCircleIcon />} size="small"  href='/artist' sx={{width:110}}>
                Ver mas
        </Button>
        <div className='option-3' id='TopArtist'>
          {artist?.data.slice(0,7).map((art, i) => {
         
            return (
              <Cards
              key={i}
              name={art.name}
              img={art.photoUrl}
            /> 
            )
          
        })}</div><br />

    </section>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </ReactScrollablleFeed>
    </div>
  );
};
export default Library