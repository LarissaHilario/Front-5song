import React,{ useState, useEffect } from 'react'
import Header from '../../components/Header/Header';
import Navbar from '../../layouts/Navbar';
import Playlist from '../../components/playlist-list/Playlist';
import TopArtist from '../../components/artist/TopArtist';
import '../../assets/styles/library.css'
const Library = () => {
    const [dataPlaylist, setDataPlaylist] = useState([]);
    const [dataPodcast, setDataPodcast] = useState([]);
    const [dataArtist, setDataArtist] = useState([]);
    const [playlist] = useState([4]);
    const [podcast] = useState([4]);
    const [artist] = useState([4]);
    let libraryId=2;

    useEffect(() => {
        //fetch('http://aquivalaip/playlist-library/playlists/library/' + libraryId) //fetch a usar para playlist de una libreria
        fetch('http://18.222.203.69:8080/playlist')
            .then((dataPlaylist) => dataPlaylist.json())
            .then(data => {
                setDataPlaylist(data.data);
                console.log(data.data);
            })
            .catch((e) => {console.log(e)});
    }, []);

    useEffect(() => {
        //fetch('http://aquivalaip/podcast-library/podcasts/library/' + libraryId)  //fetch a usar para podcast de una libreriar
        fetch('http://18.222.203.69:8080/podcast')
            .then((dataPodcast) => dataPodcast.json())
            .then(data => {
                setDataPodcast(data.data);
                console.log(data.data);
            })
            .catch((e) => {console.log(e)});
    }, []);

    useEffect(() => {
        //fetch(`http://aquivalaip/artist-library/artists/library/`+libraryId) //fetch a usar para artistas de una libreria
        fetch(`http://18.222.203.69:8080/artist`)
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
            <section className='section-1'>
                <h1>Playlist</h1>
                <div className='option-1' id='Playlist'>
                    {dataPlaylist.slice(0,4).map((play) => {

                            return (
                                <Playlist
                                    key={play.id}
                                    title={play.name}
                                    songs={play.duration}
                                    image={play.photoUrl}
                                />
                            )

                    })}</div><br />
                <a href='/playlist'>Ver mas</a>
            </section>
            <section className='section-2' >
                <h1>Podcast</h1>
                <div className='option-2' id='Playlist'>
                    {dataPodcast.slice(0,4).map((play) => {

                            return (
                                <Playlist
                                    key={play.id}
                                    title={play.name}
                                    songs={play.duration}
                                    image={play.photoUrl}
                                />
                            )


                    })} </div><br />
                <a href='/playlist'>Ver mas</a>
            </section>
            <section className='section-3'>
                <h1>Artistas</h1>
                <div className='option-3' id='TopArtist'>
                    {dataArtist.slice(0,3).map((art) => {

                            return (
                                <TopArtist
                                    key={art.id}
                                    name={art.name}
                                    avatar={art.photoUrl}
                                />
                            )

                    })}</div><br />
                <a href='/playlist'>Ver mas</a>
            </section>
        </div>
    );
};

export default Library

