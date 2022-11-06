import React from 'react'
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar1.jpg'
import styles from './navbar/styles.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

$('span').on('click', function() {
	$('span').removeClass('active');
	$(this).addClass('active');
});
const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <div className="logo" width='200px' >
                            <img src={logo} />
                        </div>
                    </li>
                    <li>
                        <img src={avatar} width='120px' />
                        <br />
                        <span className='nav-item'>Hola larissa</span>
                    </li>
                    <br />
                    <li>
                        <span className="nav-item active">
                        <a href="#" >
                                <HomeRoundedIcon />Home
                        </a>
                        </span>
                    </li>
                    <li>
                        <a href="#">
                            <span className="nav-item">Biblioteca</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="nav-item">Playlist</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="nav-item">Artistas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="nav-item">Álbumes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout">
                            <span className="nav-item">Salir</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar