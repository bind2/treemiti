import React from 'react'
import './CourseCart.scss'
import { HashLink as Link } from 'react-router-hash-link'

const CourseCart = (props) => {
    // let [fname, lname] = props.name.split(" ")
    // console.log(name)
    return (
        <div className='course-cart'>
            <Link to={`/treemiti/courses/${props.index}#`}>
                <figure>
                    <img src={props.img} alt="" />
                </figure>
                <h3>{props.name}</h3>
            </Link>
        </div>
    )
}

export default CourseCart