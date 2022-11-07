import { useEffect } from "react";
import { useState } from "react";
import './form.css'

function Form() {
  const [album, setAlbum]=useState([]);
  const [artist, setArtist]=useState([]);
    useEffect(() => {
      fetch('http://3.135.19.149:8080/album')
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
    fetch('http://3.135.19.149:8080/artist')
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
              <span>Subir una canción</span>
              </div>
              <div>
                <input className="inputText" type="text" placeholder='Nombre de la canción' />
                <br></br>
                <input className="inputText" type="text" placeholder='Duración' />
                <br></br>
                <input className="inputText" type='date' placeholder="Fecha de creación"/>
                <br/>
                <input className="inputText" type='file' placeholder="Canción"  accept=".mp3,.mp4,audio/*"/>
                <br/>
                <input className="inputText" type='file' placeholder="Imagen"  accept="image/*"/>
                  <label>Album</label>
                  <select className="select">
                  {album.map(album=> (
                  <option key={album.id} value={album.id}>
                    {album.name}
                  </option>))}
              </select>
              <br></br>
              <label>Artista</label>
              <select className="select">
                  {artist.map(artist=> (
                  <option key={artist.id} value={artist.id}>
                    {artist.name}
                  </option>))}
              </select>
              <button className="submit" >Enviar</button>
              <button className="cancelar" >Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  );
}

export default Form;
