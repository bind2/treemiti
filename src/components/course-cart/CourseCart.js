import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const CourseCart = ({ index, img, name, path}) => {
    return (
        <div className='course-cart'>
            <Link to={`/treemiti/course/${path}/${index}#`}>
                <figure>
                    <img src={img} alt="img" />
                </figure>
                <h3>{name}</h3>
            </Link>
        </div>
    )
}

export default CourseCart