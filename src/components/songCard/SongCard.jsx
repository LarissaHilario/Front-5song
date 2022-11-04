import React from 'react'
import AlbumImage from './AlbumImage.jsx';
import AlbumInfo from './AlbumInfo.jsx';
import './songCard.css';
const SongCard = (album) => {
    return (
        <div className="songCard-body flex">
          <AlbumImage url={album} />
          <AlbumInfo album={album} />
        </div>
      );
}

export default SongCard;