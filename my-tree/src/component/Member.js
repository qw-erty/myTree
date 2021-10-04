import React from 'react'

export default function AContact({img,name,githublink}) {
    return (
        <li className="linkk"><a href={githublink}><img src={img} className="avatar" alt="img"/></a><span className="username">{name}</span></li>
    )
}
