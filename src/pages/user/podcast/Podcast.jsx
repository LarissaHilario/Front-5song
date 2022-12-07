import styles from "./podcast.module.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
//<button className="button1"> <span><br/>Duración:{songs}</span><PlayCircleFilledIcon/></button>

const Podcast=({title,image,songs})=> {
    return (
        <div className={styles.containerCard}>
            <img className={styles.imagePlay} src={image} />
            <div className={styles.cardTitle}>
                <h3>{title}</h3>
            </div>
            
        </div> 
    )
    }
    export default Podcast