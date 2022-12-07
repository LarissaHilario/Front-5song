import React,{ useState, useEffect } from 'react'
import Header from '../../../components/Header/Header';
import Navbar from '../../../layouts/Navbar';
import Playlist from '../../../components/playlist-list/Playlist';
import TopArtist from '../../../components/artist/TopArtist';
import '../../../assets/styles/library.css'
import Podcast from '../podcast/Podcast';
const Library = () => {
  const [dataPlaylist, setDataPlaylist] = useState([]);
  const [dataPodcast, setDataPodcast] = useState([]);
  const [dataArtist, setDataArtist] = useState([]);
  const [playlist] = useState([4]);
  const [podcast] = useState([4]);
  const [artist] = useState([4]);

  useEffect(() => {
    fetch('http://3.19.59.225:8080/playlist')
      .then((dataPlaylist) => dataPlaylist.json())
      .then(data => {
        setDataPlaylist(data.data);
      console.log(data.data);
    })
      .catch((e) => {console.log(e)});
  }, []);

  useEffect(() => {
    fetch('http://3.19.59.225:8080/podcast')
      .then((dataPodcast) => dataPodcast.json())
      .then(data => {
        setDataPodcast(data.data);
      console.log(data.data);
    })
      .catch((e) => {console.log(e)});
  }, []);

  useEffect(() => {
    fetch('http://3.19.59.225:8080/artist')
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
          {dataPlaylist.map((play, i) => {
          if (i < playlist) {
            return (
                <Playlist
                  key={i}
                  title={play.name}
                  songs={play.duration}
                  image={play.photoUrl}
                />
            )
          } else {
            return null;
          }
        })}</div><br />
         <a href='/playlist'>Ver mas</a>
    </section>

    <section className='section-2' >
   <h1>Podcast</h1>
        <div className='option-2' id='Playlist'>
          {dataPodcast.map((play, i) => {
          if (i < podcast) {
            return (
                <Podcast
                  key={i}
                  title={play.name}
                  songs={play.duration}
                  image={play.photoUrl}
                />
            )
          } else {
            return null;
          }
        })} </div><br />
         <a href='/playlist'>Ver mas</a>
    </section>
    <section className='section-3'>
   <h1>Artistas</h1>
        <div className='option-3' id='TopArtist'>
          {dataArtist.map((art, i) => {
          if (i < artist) {
            return (
              <TopArtist
              key={i}
              name={art.name}
              avatar={art.photoUrl}
            /> 
            )
          } else {
            return null;
          }
        })}</div><br />
         <a href='/playlist'>Ver mas</a>
    </section>
    </div>
  );
};
  // return (
  //   <div className='body'>
  //     {/* <Navbar/> */}
  //     <Header title={'Library'}/>
  //     <section className='section-1'>
  //       <h1>Playlist</h1>
  //       <div>
  //         <option className='option-1'/>
  //       <img src={globos} alt="" className='img' />

  //       </div>


  //     </section>
  //   </div>
  // )
// }

export default Library

// import React, { useState, useEffect } from "react";
// import { IconContext } from "react-icons";
// import { AiFillPlayCircle } from "react-icons/ai";
// // import "./library.css";
// const Library = () => {
//   const [playlists, setPlaylists] = useState([]);

//   useEffect(() => {
//     fetch(`http://3.12.108.156:8080/playlist`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.data);
//         setPlaylists(data.data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);
  
//   const navigate = useNavigate();

//   const playPlaylist = (id) => {
//     navigate("/player", { state: { id: id } });
//   };
//   return (
//     <div className="screen-container">
//       <div className="library-body">
//         {playlists.map((playlist) => (
//           <div
//             className="playlist-card"
//             key={playlist.id}
//             onClick={() => playPlaylist(playlist.id)}
//           >
//             <img
//               src={playlist.images[0].url}
//               className="playlist-image"
//               alt="Playlist-Art"
//             />
//             <p className="playlist-title">{playlist.name}</p>
//             <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
//             <div className="playlist-fade">
//               <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
//                 <AiFillPlayCircle />
//               </IconContext.Provider>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Library;