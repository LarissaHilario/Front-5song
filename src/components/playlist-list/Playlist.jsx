import styles from "./playlist.module.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import Header from "../Header/Header";
//<button className="button1"> <span><br/>Duración:{songs}</span><PlayCircleFilledIcon/></button>

const Playlist=({title,image,songs,id})=> {
    return (
        <Card className={styles.containerCard}  style={{backgroundColor: "#ff2d96"}}
        sx={{ borderRadius:4, maxWidth: 300, maxHeight: 400 }}>
        <CardActionArea component={RouterLink} to={'/playlist/' + id}>
      
            <Typography variant="h3"  fontWeight={700} fontSize={19.2} color="white" align="center" marginLeft={5} className={styles.cardTitle} 
            sx={{marginTop:19, marginLeft:4}}> {title}</Typography>
            <CardMedia className={styles.imagenes}
            aling='center'
            component="img"
        sx={{ width: 240, height:200, 
        marginTop:-35,
    marginLeft:-1 }}
        image={image}/>
             </CardActionArea>
        </Card>
    )
    }
    export default Playlist