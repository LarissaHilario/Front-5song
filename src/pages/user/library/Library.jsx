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
const Library = () => {
  const [dataPlaylist, setDataPlaylist] = useState([]);
  const [dataPodcast, setDataPodcast] = useState([]);
  const [dataArtist, setDataArtist] = useState([]);
  const [playlist] = useState([4]);
  const [podcast] = useState([4]);
  const [artist] = useState([4]);

  useEffect(() => {
    fetch('http://3.19.59.225:8080/playlist')
      .then((dataPlaylist) => dataPlaylist.json())
      .then(data => {
        setDataPlaylist(data.data);
      console.log(data.data);
    })
      .catch((e) => {console.log(e)});
  }, []);

  useEffect(() => {
    fetch('http://3.19.59.225:8080/podcast')
      .then((dataPodcast) => dataPodcast.json())
      .then(data => {
        setDataPodcast(data.data);
      console.log(data.data);
    })
      .catch((e) => {console.log(e)});
  }, []);

  useEffect(() => {
    fetch('http://3.19.59.225:8080/artist')
      .then((dataArtist) => dataArtist.json())
      .then(data => {
        setDataArtist(data.data);
      console.log(data.data);
    })
      .catch((e) => {console.log(e)});
  }, []);

  return (
    <div className='body'>
    {/* <Navbar/> */}
  <Header title={'Library'}/> <br />
  <ReactScrollablleFeed>
    
    <section className='section-1'>
   <h1>Playlist</h1>
   <br/>
   <Button variant="outlined" startIcon={<AddCircleIcon />} size="small"  href='/playlist' sx={{width:110}}>
                Ver mas
        </Button>
        <div className='option-1' id='Playlist'>
          {dataPlaylist.map((play, i) => {
          if (i < playlist) {
            return (
                <Playlist
                  key={i}
                  title={play.name}
                  songs={play.duration}
                  image={play.photoUrl}
                />
            )
          } else {
            return null;
          }
        })}</div><br />
    </section>
    
    <section className='section-2' >
      
   <h1>Podcast</h1>
   <br/>
   <Button variant="outlined" startIcon={<AddCircleIcon />} size="small"  href='/podcast' sx={{width:110}}>
                Ver mas
        </Button>
        <div className='option-2' id='Playlist'>
          {dataPodcast.map((play, i) => {
          if (i < podcast) {
            return (
                <Podcast
                  key={i}
                  title={play.name}
                  songs={play.duration}
                  image={play.photoUrl}
                />
            )
          } else {
            return null;
          }
        })} </div><br />

    </section>
    <section className='section-3'>
   <h1>Artistas</h1>
   <br/>
   <Button variant="outlined" startIcon={<AddCircleIcon />} size="small"  href='/artist' sx={{width:110}}>
                Ver mas
        </Button>
        <div className='option-3' id='TopArtist'>
          {dataArtist.map((art, i) => {
          if (i < artist) {
            return (
              <Cards
              key={i}
              name={art.name}
              avatar={art.photoUrl}
            /> 
            )
          } else {
            return null;
          }
        })}</div><br />

    </section>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </ReactScrollablleFeed>
    </div>
  );
};
export default Library