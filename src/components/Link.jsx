import React from 'react'
import "./style/link.css"

export default function Link({ Icon, title }) {
    return (
        <div className='link'>
            <p className="icon"><Icon/></p>
            <div className="title">{title}</div>
        </div>
    )
}
