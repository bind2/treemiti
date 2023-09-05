import React from 'react'
import './Courses.scss'
import CourseCart from '../../components/course-cart/CourseCart'
import courseData from '../../courseData.json'


const Courses = () => {

    const cartList = courseData.map((data, index) => {
        return <CourseCart key={index} id={index} img={data.img} name={data.name} />
    })

    return (
        <section className='courses-section'>
            <div className="container" id='courses'>
                <h2>CAREER COURSES</h2>
                <div className="flex-container">

                    {cartList}

                </div>
            </div>
        </section>
    )
}

export default Courses