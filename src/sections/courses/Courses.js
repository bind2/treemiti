import React from 'react'
// import './Courses.scss'
import CourseCart from '../../components/course-cart/CourseCart'
import CourseData from '../../data/CourseData.json'


const Courses = () => {

    const cartList = CourseData.map((data, index) => {
        return <CourseCart
            key={index}
            index={index}
            img={data.img}
            name={data.name}
            path={data.path}
        />
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