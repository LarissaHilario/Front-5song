import Card from './Card2';
import portada from '../assets/img/aylin.jpeg'
import img1 from '../assets/img/callaita.jpg'
import img2 from '../assets/img/mor.jpg'
import img3 from '../assets/img/besos.jpg'
import '../assets/styles/album.css'

function Playlist() {
    const playlist = [
        {
            id: 1,
            title: "Callaita",
            autor: "Bad Bunny",
            imagen: img1,
            duration: "4:10"
        },
        {
            id: 2,
            title: "Hey mor",
            autor: "Ozuna, Feid",
            imagen: img2,
            duration: "3:106"
        },
        {
            id: 3,
            title: "Besos Moja2",
            autor: "Wisin & Yandel, Rosalia",
            imagen: img3,
            duration: "3:49"
        }
    ]

    return (
        <div className="conteiner-playlist">
            <div className='portada'>
                <div className='img-portada'>
                <img src={portada} />
                </div>
                <h2 className='tituloP'>Aylin</h2>
                <button>+ Agregar Cancion</button>
            </div>
            
            <div className="lista">   
            <button className='btnAlbum'>← Back</button>
            
            {playlist.map((user) => {
                return (
                    <Card
                        autor={user.autor}
                        title={user.title}
                        img={user.imagen}
                        duration={user.duration}
                    />
                );
            })}
        </div>
        </div>
    )

}
export default Playlist;