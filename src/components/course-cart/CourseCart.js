import React from 'react'
import './CourseCart.scss'
import { HashLink as Link } from 'react-router-hash-link'
import Data from '../../Data.js'

console.log(Data[0].img)
const CourseCart = (props) => {
    return (
        <div className='course-cart'>
            <Link to={`/courses/${props.id}#`}>
                <figure>
                    <img src={props.img} alt="" />
                </figure>
                <h3>{props.name}</h3>
            </Link>
        </div>
    )
}

export default CourseCart