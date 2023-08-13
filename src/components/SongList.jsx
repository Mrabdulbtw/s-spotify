import React from 'react'
import "./style/SongList.css"

export default function SongList({name,id, img,duration,album,context_uri,track_number,artists}) {

  return (
    <div className='song-list'>
      <div className="has-title">
        <div className="count">{track_number}</div>
        <div className="music-bondel">
          <img src={img} alt="" />
          <div className="song-artists">
            <div className='song-name'>{name}</div>
            <div className="artists">{artists}</div>
          </div>
        </div>
      </div>
      <div className="album-name">{album}</div>
      <div className="duration">{duration}</div>
    </div>
  )
}
