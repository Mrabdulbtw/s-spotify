import React, { useEffect } from 'react'
import "../components/style/Saidbar.css"
import Link from './Link'
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Playlist from './Playlist';
import axios from 'axios';



export default function Saidbar() {

 

  return (
    <div className='said-bar'>
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
      <Link Icon={HomeIcon} title={"Home"} />
      <Link Icon={SearchOutlinedIcon} title={"Search"} />
      <Link Icon={LibraryAddCheckIcon} title={"Librarey"} />
      <strong>PLAYLIST</strong>
      <hr />
      <Playlist />
    </div>
  )
}
