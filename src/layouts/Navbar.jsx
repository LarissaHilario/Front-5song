import React from 'react'
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar1.jpg'
import styles from './navbar/styles.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LogoutIcon from '@mui/icons-material/Logout';
import AlbumIcon from '@mui/icons-material/Album';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import Face2Icon from '@mui/icons-material/Face2';

import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    
                        <div className="logo">
                            <img src={logo}/>
                        </div>
                    
                    <li>
                        <img className='avatarNav' src={avatar}/>
                        <span className='nav-item'>Hola larissa</span>
                    </li>
                    <br/>
                    <li>
                        <a href="#">
                         <HomeRoundedIcon className='icon'></HomeRoundedIcon>Home
                        </a>
                        </li>
                    <li>
                        <a href="#">
                        <LibraryMusicIcon  className='icon'/>Biblioteca
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <QueueMusicIcon className='icon'/>
                        Playlist
                        </a>
                        </li>
                    <li>
                        <a href="#">
                            <Face2Icon  className='icon'/>Artistas
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <AlbumIcon className='icon'/>Álbumes
                        </a>
                    </li>

                    <li>
                        <a href="#" className="logout">
                            <LogoutIcon className='icon'/>Salir
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar