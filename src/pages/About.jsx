import React from 'react'
import '../styles/about.css'
import avatar from '../images/photo_about-removebg-preview.png'
import AboutSkills from '../components/AboutSkills'
import HappyClient from '../components/HappyClient'
function About() {
  return (
    <div className='about'>
      <div className="container2">
        <div className="about_top">
        <div className="about_img">
          <img src={avatar} alt="" />
        </div>
        <div className="about_top_content">
          <h5>About me</h5>
          <h2>Amran Smith & Photographer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="about_top_content_list">
            <ul>
              <li><h4>Birthday:</h4> <h3>05.04.1992</h3></li>
              <li><h4>Phone:</h4> <h3>+77 022 177 05 05</h3></li>
              <li><h4>Address:</h4> <h3>New Jersey, USA</h3></li>
              <li><h4>Email:</h4> <h3>mail@gmail.com</h3></li>
            </ul>
            <ul>
              <li><h4>Age:</h4> <h3>29</h3></li>
              <li><h4>Study:</h4> <h3>University of Texas</h3></li>
              <li><h4>Skype :</h4> <h3>steve.Andrew:</h3></li>
              <li><h4>Freelance:</h4> <h3>Available</h3></li>
            </ul>
          </div>
            <a href="#!" target="_blank" rel="noopener noreferrer">Download CV</a>
        </div>
      </div>
      <AboutSkills/>
      <HappyClient/>
      </div>
      

    </div>
  )
}

export default About
