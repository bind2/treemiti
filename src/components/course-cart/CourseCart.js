import React from 'react'
// import './CourseCart.scss'
import { HashLink as Link } from 'react-router-hash-link'

const CourseCart = (props) => {
    return (
        <div className='course-cart'>
            <Link to={`/treemiti/course/${props.index}#`}>
                <figure>
                    <img src={props.img} alt="img" />
                </figure>
                <h3>{props.name}</h3>
            </Link>
        </div>
    )
}

export default CourseCart