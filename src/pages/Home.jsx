
import person from '../assets/images/person2.png'

import '../components/shared/styles.css'
import Card from '../components/card/Card';
import ListArtist from '../components/artist/ListArtist';
import ListPlaylist from '../components/playlist-list/ListPlaylist';
import Player from '../components/Player/Player';

const Home=()=>{
    return(
        <>
        <div className='container'>

        
        <div className="body">
             <div className="Header">
            <h1>Home</h1>
        </div>
        <div className="Card-Home">
           
            <Card title={"Explora toda la música en tendencia en estos momentos"} 
        image={person} button={"Explorar ahora"}/>
        </div>
        <div className="top">
        <ListArtist></ListArtist>
        </div>
        <div className="Playlist">
            <ListPlaylist></ListPlaylist>
        </div>
        <div className="reproductor">
            
        </div>
        <Player></Player>
        </div></div>
        </>
    )

}
export default Home