import React from 'react'
import Saidbar from './saidbar'
import Body from './body'
import Footer from './Footer'
import "../components/style/player.css"


export default function Player() {
    return (
        <div className='player'>
            <div className="player-top">
                <Saidbar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}
