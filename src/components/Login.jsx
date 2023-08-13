import React from 'react'
import "./style/login.css"

export default function Login() {
    const loginClick = () => {
        const api_uri = `https://accounts.spotify.com/authorize`
        const client_id = `5bea8d3ad1094a88bfdc37006c1f3f71`
        const redirect_uri = `http://localhost:5173/`
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`
    }

   


    return (

        <div className="login-page">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="" />
            <button onClick={loginClick}>Login spotify</button>
        </div>


    )
}


