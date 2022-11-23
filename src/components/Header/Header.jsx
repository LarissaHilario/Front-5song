import SearchIcon from '@mui/icons-material/Search';
import styles from './Header.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Header=({title})=>{
    return(
        <>
        <h3>{title}</h3>

        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
          
    </>
    )
}

export default Header

