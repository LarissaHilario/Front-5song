import { useEffect, useState} from "react";
import TopArtist from "./TopArtist"
import './list.css';
const ListArtist=()=>{
  const [posts, setPosts] = useState([]);

  useEffect(() => {
     fetch('http://18.116.50.13:8080/artist?_limit=7')
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
                 <span className="titleartist">Top</span> 
                 
                 {posts.map((post)=> {
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