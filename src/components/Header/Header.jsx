import SearchIcon from "@mui/icons-material/Search";
import { Typography, Avatar, Stack, TextField, InputAdornment, Divider} from "@mui/material";
import styles from "./Header.module.css";

const Header = ({ title,alt, avatar,Name}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Typography variant="h2" fontWeight={500} sx={ {marginTop:2}}>{title}</Typography>
        </div>
     
      <Divider orientation="vertical" color="primary"></Divider>
      <div className={styles.avatar}>
        <Stack direction="row" spacing={2}>
          <Avatar alt={alt} src={avatar} 
          sx={{ width: 60, height: 60 }}/> 
          <div className={styles.name}> 
          <Typography variant="subtitle2" component="h2" sx={ {marginTop:2}} fontSize={20}>{Name}</Typography>
          </div>
        </Stack>
      </div>
      <div className={styles.search}>
      <TextField
          type="search"
          color='primary'focused
          sx={{ width: '150%' }}
          placeholder='Buscar'
          margen='normal'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div> 
      </div>
    </>
    )
}

export default Header

