import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Player from "../components/Player/Player";

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

//styles
import styles from './navbar/styles.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LogoutIcon from '@mui/icons-material/Logout';
import AlbumIcon from '@mui/icons-material/Album';
import MenuIcon from '@mui/icons-material/Menu';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import Face2Icon from '@mui/icons-material/Face2';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import {
    Typography,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box}from '@mui/material'
  //images



const renderListItem = (text, icon, link, index) => (
  <ListItem button component={NavLink} to={link} key={index}>
    <ListItemButton>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}/>
    </ListItemButton>
  </ListItem>
);

const Navbar = ({ currentPage }, props) => {
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  /*const handleLogout = () => {
    dispatch(logout());
    dispatch(cleanLivestocks());
    dispatch(cleanRazas());
    deleteToken();
  };*/

  const list = () => {
    return (
      <div className="nav">

      
      <Box
        role='presentation'
        onClick={() => setIsDrawerOpen(false)}
        onKeyDown={() => setIsDrawerOpen(false)}
        sx={{ padding: 2 }}
      >
        <Box
          className='info'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            marginBottom: '8%',
          }}
        >
          <img src="images/logo2.png" alt='logo' width='150px' />
          <Typography variant='h4' fontWeight={800} align='center' color={'white'}>
           5SONG
          </Typography>
        </Box>
        <Divider />
        <List className="list">
          {[
            { text: 'Inicio', icon: <HomeRoundedIcon color="third"/>, link: '/home' },
            { text: 'Biblioteca', icon: <LibraryMusicIcon color="third"/>, link: '/library' },
            { text: 'Artistas', icon: <Face2Icon color="third"/>, link: '/artist/' },
          
           
            { text: 'Podcast', icon: <PodcastsIcon color="third"/>, link: '/podcast' },
            {text: ' Playlist',icon: <QueueMusicIcon color="third"/>,link: '/playlist',
            }
             
           
          ].map((text, index) =>
            renderListItem(text.text, text.icon, text.link, index)
          )}
        </List>
      </Box>
      <Player className='playerNav'></Player>
      </div>
    );
  };
 


  
  const drawerWidth = 220;
  return (
    <div className={styles.nav}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"

      >
        {list()}
      </Drawer>
      
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              {currentPage}
            </Typography>
         
    </div>
  );
};

export default Navbar;
