import { useEffect } from "react";
import { useState } from "react";
import "./form.css";

function Form() {
  const handleChangeSong=(e)=>setSong(e.target.value);
  const handleChangeName=(e)=>setName(e.target.value);
  const handleChangeDuration=(e)=>setDuration(e.target.value);

  const handleSubmit = (e) => {
      e.preventDefault();
      
      const option ={
          method: 'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(
              {
              name:title,
              duration: duration,
              songUrl:song,
              albumId:'2',
              artistId:'3',
              photoUrl:'',
          })
      }

      fetch ('"http://18.189.143.169:8080/upload/song', option)
      .then(response=> response.json())
      .then (data=> data.status ?
          setSong(data.data): console.log('ha ocurrido un error'))
      .catch(err=>console.log(err))
      console.log('hola')
  };

  const [album, setAlbum] = useState([]);
  const [artist, setArtist] = useState([]);
  const [title,setName]=useState();
  const [duration, setDuration]=useState();
  const [song, setSong]=useState();

  useEffect(() => {
    fetch("http://3.135.19.149:8080/album")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setAlbum(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch("http://3.135.19.149:8080/artist")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setArtist(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="wrapper">
      <div className="checkout_wrapper">
        <div className="product_info">
          <img src="images/images.svg" alt="logo" />
        </div>
        <div className="form">
          <div className="general">
            <div className="title">
              <span>Subir una canci??n</span>
            </div>
            <div>
              <input
                className="inputText"
                type="text"
                placeholder="Nombre de la canci??n"
                value={title}
                onChange={handleChangeName}/>
              
              <br></br>
              <input className="inputText" type="text" placeholder="Duraci??n"
              value={duration} 
              onChange={handleChangeDuration}/>
              <br></br>
             
              <br />
              <input
                className="inputText"
                type="file"
                placeholder="Canci??n"
                accept=".mp3,.mp4,audio/*"
                value={song}
                onChange={handleChangeSong}
              />
              <br />
             
              <label>Album</label>
              <select className="select">
                {album.map((album) => (
                  <option key={album.id} value={album.id}>
                    {album.name}
                  </option>
                ))}
              </select>
              <br></br>
              <label>Artista</label>
              <select className="select">
                {artist.map((artist) => (
                  <option key={artist.id} value={artist.id}>
                    {artist.name}
                  </option>
                ))}
              </select>
              <button className="submit" onClick={handleSubmit}>Enviar</button>
              <button className="cancelar">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
