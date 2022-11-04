import imgSrc from "../../assets/artwork.jpg";
import imgSrc2 from "../../assets/artwork2.jpg";
import imgSrc3 from "../../assets/artwork3.jpg";
import cali from "../../assets/cali-wataboi.mp3";
import fifty from "../../assets/50-tobylane.mp3";
import iwonder from "../../assets/iwonder-dreamheaven.mp3";

 const songs =[
  {
    id:1,
    name: "Cali",
    artists: "Wataboi",
    track: cali,
    album: {
      albumType:'studio',
      totalTracks: 5,
      releaseDate:'20-06-03',
      albumName: "Funciona",
     image: imgSrc}
  },
  {
    id:2,
    name: "50",
    artists: "tobylane",
    track: fifty,
    album: {
      albumType:'studio',
      totalTracks: 6,
      releaseDate:'20-06-03',
      albumName: "Hola",
      image:imgSrc2}
  },
  {
    id:3,
    name: "I Wonder",
    artists: "DreamHeaven",
    track: iwonder,
    album: {
      albumType:'studio',
      totalTracks: 7,
      releaseDate:'20-06-03',
      albumName: "Si",
      image: imgSrc3}
  }
];

export default songs;