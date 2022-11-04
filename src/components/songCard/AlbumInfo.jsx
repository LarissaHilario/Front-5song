import React from 'react'
import songs from '../Player/tracksTests';
import './albumInfo.css';
const AlbumInfo = ({album}) => {
    const artists = [];
    songs.forEach((element) => {
      artists.push(element.artists);
    });
  
    return (
      <div className="albumInfo-card">
        <div className="albumName-container">
          <div className="marquee">
            <p>{songs.at().album.albumName+ " - " + artists.join(", ")}</p>
          </div>
        </div>
        <div className="album-info">
          <p>{`${album?.name} is an ${album?.album_type} by ${artists.join(
            ", "
          )} with ${album?.total_tracks} track(s)`}</p>
        </div>
        <div className="album-release">
          <p>Release Date: {album?.release_date}</p>
        </div>
      </div>
    );
}

export default AlbumInfo;