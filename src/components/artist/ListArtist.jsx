import { useEffect, useState} from "react";
import TopArtist from "./TopArtist"
import './list.css';
import { useSelector } from "react-redux";
const ListArtist=()=>{
const { artist } = useSelector(state => state.artist);
  const [posts, setPosts] = useState([]);



    return (
        <>
       
            <div className="containerArtist">
                 <span className="titleartist">Top Artistas</span> 
                 
                 {artist?.data.slice(0,4).map((post)=> {
                return (
                    <>
                   <TopArtist
                      key={post.id}
                      name={post.name}
                      avatar={post.photoUrl}
                    />
                     </>
                )

            })}
                   
                  
            </div>
            </>
    )
}
export default ListArtist
