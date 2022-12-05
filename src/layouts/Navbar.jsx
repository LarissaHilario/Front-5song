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
  ListItemText}from '@mui/material'
  //images
import logo from '../assets/images/logo.png';

const renderListItem = (text, icon, link, index) => (
    <ListItem button component={NavLink} to={link} key={index}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );

  const Navbar = ({ currentPage }) => {
    const dispatch = useDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
 
  
    const list = () => {
      return (
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
            <img src={logo} alt='logo' width='150px' />
          </Box>
          <Divider />
          <List>
            {[
              { text: 'Inicio', icon: <HomeRoundedIcon />, link: '/home' },
              { text: 'Explorar', icon: <PetsIcon />, link: '/browser/' },
              { text: 'Biblioteca', icon: <LibraryMusicIcon />, link: '/library' },
              { text: 'Playlist', icon: <QueueMusicIcon />, link: '/playlist' },
              {
                text: 'Album',
                icon: <AlbumIcon />,
                link: '/album',
              },
              { text: 'Podcast', icon: <PodcastsIcon />, link: '/podcast' },
            ].map((text, index) =>
              renderListItem(text.text, text.icon, text.link, index)
            )}
          </List>
        </Box>
      );
    };
  
    return (
      <div className={styles.nav}>
        <Drawer
          anchor='left'
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          {list()}
        </Drawer>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <Toolbar>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                {currentPage}
              </Typography>
              <Button  color='inherit'>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  };

  export default Navbar