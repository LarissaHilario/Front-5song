import person from "../../assets/images/person2.png";
import Card from "../../components/card/Card";
import ListArtist from "../../components/artist/ListArtist";
import ListPlaylist from "../../components/playlist-list/ListPlaylist";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="body">
      <section>
        <div className="Header">
          <Header title={"Home"} avatar={person} Name={"larissa"}></Header>
        </div>
      </section>
      <div className="Card-Home">
        <Card
          title={"Explora toda la música en tendencia en estos momentos"}
          image={person}
          button={"Explorar ahora"}
        />
      </div>

      <ListArtist />
      <div className="Playlist">
        <ListPlaylist />
      </div>
    </div>
  );
};
export default Home;
