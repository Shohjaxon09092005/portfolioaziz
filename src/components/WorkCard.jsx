import React from 'react'
import '../styles/workCard.css'
import rasm from '../images/work1.webp'
function WorkCard() {
  return (
    <div className='work__card'>
        <img src={rasm} alt="" />
        <h2>Personal videos</h2>
        <p>youtube</p>
      
    </div>
  )
}

export default WorkCard
