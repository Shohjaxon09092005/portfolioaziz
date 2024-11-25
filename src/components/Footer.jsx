import React from 'react'
import '../styles/footer.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer_wrapper">
        <div className="icon_div">
       <NavLink><FaFacebookF color="#fff" size={24} /></NavLink> 
        </div>
        <div className="icon_div">
       <NavLink><FaTwitter color="#fff" size={24} /></NavLink> 
        </div>
        <div className="icon_div">
       <NavLink><FaLinkedinIn color="#fff" size={24} /></NavLink> 
        </div>
        <div className="icon_div">
       <NavLink> <FaDribbble color="#fff" size={24} /></NavLink> 
        </div>
        <div className="icon_div">
       <NavLink><FaInstagram color="#fff" size={24} /></NavLink> 
        </div>
      </div>
    </div>
  )
}

export default Footer
