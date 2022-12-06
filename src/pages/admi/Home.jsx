import "../../components/shared/styles.css";
import person from "../../assets/images/person2.png";

import Header from "../../components/Header/Header";
import CardUpload from "../../components/admin/Cardupload/CardUpload";
import { useNavigate } from "react-router-dom";

const HomeAdmi = () => {
  const navigate = useNavigate();

  const handleSongU = () => {
    navigate("/Upload-song")
  };

  const handlePodcastU = () => {
    navigate("/Upload-podcast")
  };

  const handleAlbumU = () => {
    navigate("/Upload-album")
  };

  return (
    <div className="body">
      <div className="Header">
        <Header title={"Home"}></Header>
      </div>
      <div>
        <a onClick={handleSongU}>
          <CardUpload title={"Subir Cancion"} image={person} />
        </a>
        <a onClick={handlePodcastU}>
          <CardUpload title={"Subir Podcast"} image={person} />
        </a>
        <a onClick={handleAlbumU}>
          <CardUpload title={"Subir Album"} image={person} />
        </a>
      </div>
    </div>
  );
};
export default HomeAdmi;
