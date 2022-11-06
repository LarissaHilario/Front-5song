import React, { useState } from "react";
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
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    
    return (
        <div className={styles.container}>
            <nav className={styles.nav}  clicked={click}>
                <ul>
                    
                        <div className="logo">
                            <img src={logo}/>
                        </div>
                    
                    <li>
                        <img className='avatarNav' src={avatar}/>
                        <span className='nav-item'>Hola larissa</span>
                    </li>
                    <br />
                    <li>
                        <a>
                         <HomeRoundedIcon className='icon'></HomeRoundedIcon>
                         <span className='nav-link'>Home</span>
                        </a>
                    
                    </li>
                    <li>
                        <a href="#">
                        <LibraryMusicIcon  className='icon'/>
                        <span className='nav-link'>Biblioteca</span>
                        </a>
                    </li>
                    <li>
                        <a  component={NavLink} onClick={() => setClick(false)}
                          activeClassName="active"
                          to="/playlist">
                        <QueueMusicIcon className='icon'
                        />
                        <span className='nav-link' clicked={click}>Playlist</span>
                        </a>
                        </li>
                    <li>
                        <a href="#">
                            <Face2Icon  className='icon'/>
                            <span className='nav-link'>Artistas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <AlbumIcon className='icon'/>
                        <span className='nav-link'>Álbumes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout">
                            <LogoutIcon className='icon'/>
                            <span className='nav-link'>Salir</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar