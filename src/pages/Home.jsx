
import person from '../assets/images/person2.png'

import '../components/shared/styles.css'
import Card from '../components/card/Card';
import ListArtist from '../components/artist/ListArtist';
import ListPlaylist from '../components/playlist-list/ListPlaylist';
import Player from '../components/Player/Player';

const Home = () => {
    return (
        <div className="body">
            <div className="Header">
                <h3>Home</h3>
            </div>
            <div className="Card-Home">
                <Card title={"Explora toda la música en tendencia en estos momentos"}
                    image={person} button={"Explorar ahora"} />
            </div>
            <div className="top">
                <ListArtist/>
            </div>
            <div className="Playlist">
                <ListPlaylist/>
            </div>
            <div className="reproductor">
                <Player/>
            </div>
        </div>
    )

}
export default Home