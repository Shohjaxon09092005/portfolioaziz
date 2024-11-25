import React from 'react'
import '../styles/header.css'
import { NavLink, useLocation } from 'react-router-dom'
function Header() {
    const location = useLocation();
    return (
        <div className='header'>
            <div className="header_wrapper">
                <h1>A</h1>
                <ul>
                    <NavLink className={location.pathname ==="/"? "active_link":""} to="/"> <li>Home</li></NavLink>
                    <NavLink to="/about" className={location.pathname ==="/about"? "active_link":""}><li>About</li></NavLink>
                    <NavLink to="/portfolio" className={location.pathname ==="/portfolio"? "active_link":""}><li>Portfolio</li></NavLink>
                    <NavLink to="/clients" className={location.pathname ==="/clients"? "active_link":""}><li>Clients</li></NavLink>
                    <NavLink to="/blog" className={location.pathname ==="/blog"? "active_link":""}><li>Blog</li></NavLink>
                    <NavLink to="/contact" className={location.pathname ==="/contact"? "active_link":""}><li>Contact</li></NavLink>
                </ul>
                <div className="header_bottom">
                    <h3>@2021 Smith</h3>
                    <p>Created By <a href="http://" target="_blank" rel="noopener noreferrer">ThemexHunter.</a> </p>
                </div>
            </div>
        </div>
    )
}

export default Header
