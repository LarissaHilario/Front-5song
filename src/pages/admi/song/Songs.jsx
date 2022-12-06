

import Header from "../Header"
import DialogSong from "../../../components/Dialogs/DialogSong";

const Songs=()=>{
    return(
        <>
        <div className="body">
                <section>
                     <div className="Header">
                    <Header title={'Canciones'} Name={"larissa"}></Header>
                </div>
                </section>
                <br></br>
                <DialogSong/>
                
            </div>
        </>
    )
}
export default Songs