
import "./list.css"
import Playlist from "./Playlist";
import globos from '../../assets/images/globos.jpg'
function ListPlaylist() {
 
    const cakes = [
      {
        id:1,
        name: "Fiesta",
        songs:"12 canciones",
        image:"images/globos.jpg"
      },
      {
        id:2,
        name: "Fiesta",
        songs:"12 canciones",
        image:"images/globos.jpg"
      },
      {
        id:3,
        name: "Fiesta",
        songs:"12 canciones",
        image:"images/globos.jpg"
      },
      {
        id:4,
        name: "Fiesta",
        songs:"12 canciones",
        image:"images/globos.jpg"
      },
      
    ];
  
    return (
        <>
            <br>
            </br>
            <br></br>
            <h2 className="subtitle">Playlist</h2> 
            <div className="containerPlay">
            {cakes.map((cake)=> {
                return (
                    <Playlist
                      key={cake.id}
                      title={cake.name}
                      songs={cake.songs}
                      image={cake.image}
                    />
                   
                )
               
            })}  
            </div>
        </>
    );
  }
  

  export default ListPlaylist;
