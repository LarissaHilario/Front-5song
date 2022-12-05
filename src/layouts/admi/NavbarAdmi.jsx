import React, { useState } from "react";

import { NavLink } from 'react-router-dom';
//styles
import styles from '../admi/nav.module.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

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
                  fontSize: 16,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
               />
    </ListItemButton>
  </ListItem>
);

const NavbarAdmi = ({ currentPage }, props) => {
 // const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const list = () => {
    return (
      <div className={styles.nav}>

      
      <Box
        role='presentation'
        onClick={() => setIsDrawerOpen(false)}
        onKeyDown={() => setIsDrawerOpen(false)}
        sx={{ padding: 2 }}
      >
        <Box
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
          Bienvenido Administrador
        </Typography>
        </Divider>
        
        <List className={styles.list}>
          {[
            { text: 'Canciones', icon: <MusicNoteIcon color="third"/>, link: '/song' },
            { text: 'Artistas', icon: <Face2Icon color="third"/>, link: '/uploadArtist' },
            { text: 'Podcast', icon: <PodcastsIcon color="third"/>, link: '/uploadPodcast' },
           
          ].map((text, index) =>
            renderListItem(text.text, text.icon, text.link, index)
          )}
        </List>
        
      </Box>
     
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

export default NavbarAdmi;
