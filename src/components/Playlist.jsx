import React, { useEffect } from 'react'
import { useStateValue } from '../utils/stateContext'
import axios from 'axios'
import "./style/playlists.css"

export default function Playlist() {
  const [{ token, playLists }, dispatch] = useStateValue()


  
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const { items } = response.data
      // console.log(items);
      const playLists = items.map(({ id, name }) => {
        return { id, name }
      })

      dispatch({
        type: 'set_playLists',
        playLists: playLists
      })

    };
    getPlaylistData();

  }, [token, dispatch]);


  return (
    <div className='container'>
      <div className="playlists">
        {
          playLists.map((playL) => {
            return (
              <p className='playlist'>{playL.name}</p>
            )
          })
        }
      </div>
    </div>
  )
}
