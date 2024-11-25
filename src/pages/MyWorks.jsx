import React from 'react'
import '../styles/portfolio.css'
import HeaderWork from '../components/HeaderWork'
import WorkCard from '../components/WorkCard'
function MyWorks() {
  return (
    <div className='MyWorks'>
      <div className="container2">
       <HeaderWork/>
       <div className="work_wrapper">
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
       </div>
       
      </div>
    </div>
  )
}

export default MyWorks
