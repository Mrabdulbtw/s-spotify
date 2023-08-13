import React, { useEffect, useState } from 'react'
import "../components/style/body.css"
import Header from './header'
import { useStateValue } from '../utils/stateContext'
import axios from 'axios'
import SongList from './SongList'


export default function Body() {

  const [{ token, playListId, playlistData }, dispatch] = useStateValue()

  useEffect(() => {

    const getPlaylist = async () => {
      const res = await axios.get(`https://api.spotify.com/v1/playlists/${playListId}`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })

      const playlistData = {
        img: res.data.images[0].url,
        name: res.data.name,
        id: res.data.id,
        desc: res.data.description,
        tracks: res.data.tracks.items.map((item) => {
          return item.track
        })
      }

      dispatch({
        type: "set_playlistData",
        playLData: playlistData
      })
    }


    getPlaylist()
  }, [token, dispatch, playListId]);


  const { tracks } = playlistData

  // console.log(tracks);


  return (
    <div className='body'>

      <Header />

      <div className="song-details">
        <img src={playlistData.img} alt={playlistData.name} />
        <div className="description">
          <p>PLAYLIST</p>
          <h1>{playlistData.name}</h1>
          <div className="des-owner">
            <p className="name">{ }</p>
            <p className="length">
              {playlistData.desc} songs
            </p>
          </div>
        </div>
      </div>
      <div className='list-container'>

        <div className="song-list-header">

          <div className="has-title">
            <div className="count">#</div>
            <div className="title">title</div>
          </div>
          <div className="album">album</div>
          <div className="time">time</div>
        </div>


        {
          tracks?.map((trData) => {
            return <SongList

              name={trData.name}
              id={trData.id}
              img={trData.album.images[2].url}
              duration={trData.duration_ms}
              album={trData.album.name}
              context_uri={trData.album.uri}
              track_number={trData.track_number}
              artists={trData.artists.map((ar) => ar.name)}
            />
          })
        }

      </div>
    </div>
  )
}
