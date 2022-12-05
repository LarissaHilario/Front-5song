import Header from "../../components/Header/Header"
import Playlist1 from "../../components/playlist/Playlist"

const Playlist =()=>{
    return(
        <>
          <div className="body">
        <div className="Header">
                <Header title={'Playlists'}></Header>
                <Playlist1></Playlist1>
            </div>
        </div>
        </>
    )
}
export default Playlist