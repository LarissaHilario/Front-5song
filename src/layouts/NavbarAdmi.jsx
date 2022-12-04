import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Player from "../components/Player/Player";

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

//styles
import styles from './navbar/stylesNav.module.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import Face2Icon from '@mui/icons-material/Face2';
import LyricsIcon from '@mui/icons-material/Lyrics';
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
                  fontSize: 16,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
               />
    </ListItemButton>
  </ListItem>
);

const NavbarAdmi = ({ currentPage }, props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);


  

  const list = () => {
    return (
      <div className={styles.navv}>

      
      <Box
        role='presentation'
        onClick={() => setIsDrawerOpen(false)}
        onKeyDown={() => setIsDrawerOpen(false)}
        sx={{ padding: 2 }}
      >
        <Box
          className={styles.infoo}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            marginBottom: '8%',
          }}
        >
          <img src="images/logo2.png" alt='logo' width='150px' />
          <Typography variant='h4' fontWeight={800} align='center' color={'#FFF5F5'}>
           5SONG
          </Typography>
        </Box>
        <Divider>
          <Typography variant='subtitle1' fontWeight={600} color={'#1E1A3D'}>
          Hola Administrador
        </Typography>
        </Divider>
        
        <List className={styles.listt}>
          {[
            { text: 'Canciones', icon: <LyricsIcon color="third"/>, link: '/uploadSong' },
            { text: 'Artistas', icon: <Face2Icon color="third"/>, link: '/uploadArtist' },
            { text: 'Podcast', icon: <PodcastsIcon color="third"/>, link: '/uploadPodcast' }          
           
          ].map((text, index) =>
            renderListItem(text.text, text.icon, text.link, index)
          )}
        </List>
        <Divider/>
      
      </Box>
      </div>
    );
  };
 


  
  const drawerWidth = 220;
  return (
    <div className={styles.navv}>
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

export default NavbarAdmi;
