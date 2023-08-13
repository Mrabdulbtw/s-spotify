import React, { useEffect } from 'react'
import Login from './components/Login'
import { useStateValue } from './utils/stateContext'
import Player from './components/Player'
import SpotifyWebApi from 'spotify-web-api-node'




function App() {

  const [{ token}, dispatch] = useStateValue()

  useEffect(() => {
    const getToken = () => {
      const _token = window.location.hash.split('&')[0].split(`=`)[1]
     window.location.hash=''

      if (_token) {
        dispatch({
          type: 'set_token',
          token: _token
        })
    
      }
    }

    getToken()
  
  }, [dispatch, token])

  return (
    <div className='App'>
      {
        token ? <Player /> : <Login />
      }
    </div>
  )
}

export default App

