import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar1.jpg";
import styles from "./navbar/styles.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LogoutIcon from "@mui/icons-material/Logout";
import AlbumIcon from "@mui/icons-material/Album";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import Face2Icon from "@mui/icons-material/Face2";
import PodcastsIcon from "@mui/icons-material/Podcasts";

import { Link } from "react-router-dom";
import Player from "../components/Player/Player";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className={styles.container}>
      <nav className={styles.nav} clicked={click}>
        <ul>
          <div className="logo">
            <img src={logo} />
          </div>

          <li>
            <img className="avatarNav" src={avatar} />
            <span className="nav-item">Hola larissa</span>
          </li>
          <br />
          <li>
            <div className="a">
              <Link to="/home">
                <HomeRoundedIcon className="icon"></HomeRoundedIcon>
                <span className="nav-link">Home</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="a">
              <LibraryMusicIcon className="icon" />
              <span className="nav-link">Biblioteca</span>
            </div>
          </li>
          <li>
            <div className="a">
              <Link to="/playlist">
                <QueueMusicIcon className="icon" />
                <span className="nav-link">Playlist</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="a">
              <PodcastsIcon className="icon" />
              <span className="nav-link">Podcast</span>
            </div>
          </li>
          <li>
            <div className="a">
              <AlbumIcon className="icon" />
              <span className="nav-link">Álbumes</span>
            </div>
          </li>

          <Player className="playerNav"></Player>
          <li>
            <div className="a">
              <Link to="/login">
                <LogoutIcon className="icon" />
                <span className="nav-link">Salir</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
