import styles from "./card.module.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
//<button className="button1"> <span><br/>Duración:{songs}</span><PlayCircleFilledIcon/></button>
import { Link as RouterLink } from 'react-router-dom';
const Cards=({name,img,id})=> {
    return(
        <Card className={styles.containerCard}  style={{backgroundColor: "#ff2d96"}}
        sx={{ borderRadius:4, maxWidth: 300, maxHeight: 400 }}>
        <CardActionArea component={RouterLink} to={'/artist/' + id}>
      
            <Typography variant="h3"  fontWeight={700} fontSize={19.2} color="white" align="center" className={styles.cardTitle} sx={{marginLeft:3,marginTop:11}}> {name}</Typography>
            <CardMedia className={styles.imagenes}
            aling='center'
            component="img"
        sx={{ width: 240, height:200, 
        marginTop:-25,
    marginLeft:-1 }}
        image={img}/>
             </CardActionArea>
        </Card>

    )
    
    }
    export default Cards