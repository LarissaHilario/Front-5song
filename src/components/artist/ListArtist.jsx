import TopArtist from "./TopArtist"
import './list.css';
const ListArtist=()=>{

    const artists = [
        {
          id:1,
          name: "Harry Styles",
          image:'/images/harry (1).jpg'
        },
        {
          id:2,
          name: "Taylor Swift",
          image:'/images/harry (3).jpg'
        },
        {
          id:3,
          name: "Joji",
          image:'/images/harry (2).jpg'
        }]
    return (
        <>
       
            <div className="containerArtist">
                 <h2 className="subtitle">Top Artistas</h2> 
            {artists.map((artist)=> {
                return (
                    <>
                    
                   <TopArtist
                      key={artist.id}
                      name={artist.name}
                      avatar={artist.image}
                    /> 
                    
                   
                   </>
                )
               
            })}  
            </div>
            </>
    )
}
export default ListArtist