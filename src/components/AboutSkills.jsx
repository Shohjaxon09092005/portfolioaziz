import React from 'react'
import '../styles/skills.css'
const skillsData = [
    { name: "Adventure", percent: 50 },
    { name: "Family", percent: 95 },
    { name: "Lifestyle", percent: 80 },
    { name: "English", percent: 90 },
    { name: "Spanish", percent: 85 },
    { name: "Hindi", percent: 95 },
  ];
function AboutSkills() {
  return (
    <div className="skills">
    <h2>Photography & Language Skills</h2>
    <div className="skills-list">
      {skillsData.map((skill, index) => (
        <div className="skill" key={index}>
          <span>{skill.name} <p>{skill.percent}%</p> </span>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${skill.percent}%` }}
            >
              
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default AboutSkills
