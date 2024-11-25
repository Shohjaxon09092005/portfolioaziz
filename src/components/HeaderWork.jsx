import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../styles/headerWork.css'
function HeaderWork() {
    const location = useLocation();
  return (
    <div className='header_work'>
       <span>portfolio</span>
        <h2>My Works</h2>
        <ul>
           <NavLink ><li className={location.pathname ==="/portfolio"? "active_link":""}>All</li></NavLink> 
           <NavLink className={location.pathname ==="/"? "active_link":""}><li>Youtube</li></NavLink> 
           <NavLink className={location.pathname ==="/"? "active_link":""}><li>Mockub</li></NavLink> 
           <NavLink className={location.pathname ==="/"? "active_link":""}><li>Photo</li></NavLink> 
           <NavLink className={location.pathname ==="/"? "active_link":""}><li>Popup</li></NavLink> 
           <NavLink className={location.pathname ==="/"? "active_link":""}><li>Other</li></NavLink> 
        </ul>
    </div>
  )
}

export default HeaderWork
