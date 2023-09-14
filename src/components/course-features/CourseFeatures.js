import React from 'react'
// import './CourseFeatures.scss'
import { HashLink as Link } from 'react-router-hash-link'

const CourseFeatures = ({ getData, img, name, path, index }) => {
  // const { getData, img, name, path } = props
  const [fname, lname] = name.split(" ")
  return (
    <li >
      <Link to={`/treemiti/about/${path}/${index}#`}>
        <figure>
          <img src={img} alt="img" />
        </figure>

        <h3>{fname} <br /> {lname}</h3>
      </Link>
    </li>
  )
}

export default CourseFeatures