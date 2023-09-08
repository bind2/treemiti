import React from 'react'
import './CourseFeatures.scss'
import { HashLink as Link } from 'react-router-hash-link'

const CourseFeatures = (props) => {
const [fname, lname] = props.name.split(" ")
  return (
    <li>
      <Link to={`/treemiti/${props.index}#`}>
        <figure>
          <img src={props.img} alt="img" />
        </figure>
        
        <h3>{fname} <br/> {lname}</h3>
      </Link>
    </li>
  )
}

export default CourseFeatures