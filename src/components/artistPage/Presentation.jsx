import { CardMedia, Typography } from '@mui/material'
import css from '../../assets/styles/artist.module.css'

const Presentation=({id, name,photoUrl})=> {
    return(
        <div className={css.containerArtist}>
            <CardMedia className={css.photoArtist}
            aling='center'
            component="img"
            sx={{ width: 170, height:190, 
              marginTop:10,
              marginLeft:22 }}
              image={photoUrl}/>
            
            <Typography variant="h2" component="subtitle1" fontWeight={700} fontSize={70} color="white" align='center' className={css.nameArtist}
            sx={{marginLeft:40, marginTop:10}}>
                {name}
            </Typography>
               
        </div>
    )
}

export default Presentation