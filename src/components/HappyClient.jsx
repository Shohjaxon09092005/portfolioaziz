import React from 'react'
import '../styles/happyClient.css'
import HappyCard from './HappyCard'
import our1 from '../images/our1.webp'
import our2 from '../images/our2.webp'
import our3 from '../images/our3.webp'
import our4 from '../images/our4.webp'
import { FaUsers, FaMedal, FaCheckSquare } from "react-icons/fa";
function HappyClient() {
    return (
        <div className='happy'>
            <h2>Happy Client</h2>
            <div className="happy_wrapper">
                <HappyCard number="1520" title="Happy Customers" Icon={FaUsers} />
                <HappyCard number="1250" title="Award Win" Icon={FaMedal} />
                <HappyCard number="1480" title="Complete Project"  Icon={FaCheckSquare}/>
            </div>
            <h2>Our Partners</h2>
            <div className="our_wrapper">
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src={our1} alt="" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src={our2} alt="" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src={our3} alt="" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src={our4} alt="" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src={our1} alt="" /></a>
            </div>
        </div>
    )
}

export default HappyClient
