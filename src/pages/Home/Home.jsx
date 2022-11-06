import Card from "../../components/card/Card";
import person from '../../assets/images/person2.png'
import ListPlaylist from "../../components/playlist-list/ListPlaylist";
import ListArtist from "../../components/artist/ListArtist";
import Navbar from "../../layouts/Navbar";
import '../../components/shared/styles.css'

const Home = () => {
    return (
        <div className="body">
             <div className="Header">
            <h3>Home</h3>
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
        
        
        
        </div>
    )

}
export default Home