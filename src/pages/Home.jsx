
import person from '../assets/images/person2.png'

import '../components/shared/styles.css'
import Card from '../components/card/Card';
import ListArtist from '../components/artist/ListArtist';
import ListPlaylist from '../components/playlist-list/ListPlaylist';
import Player from '../components/Player/Player';
import Header from '../components/Header/Header';

const Home = () => {
    return (
        <div className='contenedor'>
        <div className="body">
            <div className="Header">
                <Header title={'Home'}></Header>
            </div>
           <br></br>
           <br></br>
            <div className="Card-Home">
                <Card title={"Explora toda la música en tendencia en estos momentos"}
                    image={person} button={"Explorar ahora"} />
            </div>
                <ListArtist/>
            <div className="Playlist">
                <ListPlaylist/>
            </div>
        </div>
        </div>
    )

}
export default Home