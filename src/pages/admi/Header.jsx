import * as React from 'react';
import { useState, } from "react";
import { useNavigate } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import { Typography, Avatar, Stack, TextField, InputAdornment, Divider} from "@mui/material";
import styles from "./stylesHeader.module.css";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header = ({ title,alt, avatar,Name}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickRedux=()=>{
    navigate('/login');
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Typography variant="h2" fontWeight={500} sx={ {marginTop:2}}>{title}</Typography>
        </div>
     
      <Divider orientation="vertical" color="primary"></Divider>
      <div className={styles.avatar}>
      
      <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
        <Stack direction="row" spacing={2}>
          <Avatar src={avatar} 
          sx={{ width: 60, height: 60 }}/> 

          
          <div className={styles.name}> 
          <Typography variant="subtitle2" component="h2" sx={ {marginTop:2}} fontSize={20}>{Name}</Typography>
          </div>

        </Stack>
        </IconButton>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      
       >
        <MenuItem  onClick={handleClickRedux}>
          <IconButton onClick={handleClickRedux}>
            <Logout fontSize="small" /> 
            
          </IconButton>
          Cerrar Sesión
        </MenuItem>
      </Menu>

      </div>
      <div className={styles.search}>
      <TextField
          type="search"
          color='fifth'focused
          sx={{ width: '20%' }}
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