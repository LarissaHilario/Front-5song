import styles from "./card.module.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Card, CardMedia, Typography } from "@mui/material";
//<button className="button1"> <span><br/>Duración:{songs}</span><PlayCircleFilledIcon/></button>

const Cards=({name,img})=> {
    return(
        <Card className={styles.containerCard} 
        style={{backgroundColor: "#ff2d96"}}
        sx={{ borderRadius:4, maxWidth: 300, maxHeight: 400 }}>
            <Typography variant="h3" component="subtitle1" fontWeight={700} fontSize={20} color="white" align="center" className={styles.cardTitle} 
            sx={{marginTop:50}}> {name}</Typography>
            <CardMedia className={styles.imagenes}
            aling='center'
            component="img"
        sx={{ width: 190, height:200, 
        marginTop:-15,
    marginLeft:-22 }}
        image={img}/>
             
        </Card>

    )
    
    }
    export default Cards