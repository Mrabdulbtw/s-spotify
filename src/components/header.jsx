import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./style/header.css"
import { useStateValue } from '../utils/stateContext';
import axios from 'axios';

export default function Header() {
    const [{ token, user }, dispatch] = useStateValue()


    useEffect(() => {

        const getUser = async () => {
            const res = await axios.get(`https://api.spotify.com/v1/me`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            })
            const { display_name, images } = res.data
            const user = {
                name: display_name,
                image: images
            }
            dispatch({
                type: "set_user",
                user: user
            })
        }
        getUser()

    }, [token, dispatch])


    return (
        <div className='header'>
            <div className="search-box">
                <SearchIcon className='serach-icon' />
                <input type="text" placeholder='enter the name' />
            </div>
            <div className="user-profile">
                <img src="data:image/jpeg;base64,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" alt="profile" />
                <p></p>
            </div>
        </div>
    )
}
