import { useEffect, useState} from "react";
import TopArtist from "./TopArtist"
import './list.css';
import { useSelector } from "react-redux";
const ListArtist=()=>{
const { artist } = useSelector(state => state.artist);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
     fetch('http://18.222.203.69:8080/artist')
        .then((response) => response.json())
        .then((data) => {
           console.log(data.data);
           setPosts(data.data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

    return (
        <>
       
            <div className="containerArtist">
                 <span className="titleartist">Top Artistas</span>

                 {posts.slice(0,5).map((post)=> {

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
