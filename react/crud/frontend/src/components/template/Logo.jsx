import './Logo.css'
import logo from '../../assents/images/Logo.png'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="log">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>