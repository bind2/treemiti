import React from 'react'
import './CourseFeatures.scss'
import { NavLink } from 'react-router-dom'

const CourseFeatures = () => {
  return (
    <ul className='features-list'>
        <li><NavLink to='/treemiti/CareerGuidance'><img src="" alt="" /><h3>Career <br/> Guidance</h3></NavLink></li>
        <li><NavLink to='/treemiti/IndustrialSyllabus'><img src="" alt="" /><h3>Industrial <br/> Syllabus</h3></NavLink></li>
        <li><NavLink to='/treemiti/ExperiencedFaculties'><img src="" alt="" /><h3>Experienced <br/> Faculties</h3></NavLink></li>
        <li><NavLink to='/treemiti/TrustedCertification'><img src="" alt="" /><h3>Trusted <br/> Certification</h3></NavLink></li>
        <li><NavLink to='/treemiti/PersonalDevelopment'><img src="" alt="" /><h3>Personal <br/> Development</h3></NavLink></li>
        <li><NavLink to='/treemiti/PlacementAssistance'><img src="" alt="" /><h3>Placement <br/> Assistance</h3></NavLink></li>
        
    </ul>
  )
}

export default CourseFeatures