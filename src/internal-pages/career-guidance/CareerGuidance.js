import React from 'react'
import CourseCart from '../../components/course-cart/CourseCart'
import CourseData from '../../data/CourseData.json'

const CareerGuidance = () => {
    const cartList = CourseData.map((data, index) => {
        const { img, name, path } = data
        return <CourseCart key={index} index={index} img={img} name={name} path={path}
        />
    })

    return (
        <section className='career-guidance-section'>
            <div className="container" id='career-guidance'>
                <div className="other-courses">
                    <h3>Our Other Courses</h3>
                    <div>
                        {cartList}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CareerGuidance