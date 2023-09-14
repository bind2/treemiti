import React from 'react'
import CourseCart from '../../components/course-cart/CourseCart'
import CourseData from '../../data/CourseData'
// import { useNavigate } from 'react-router-dom'

const Courses = () => {

    // const navigate = useNavigate()

    // const getData =(index)=>{
    //     let path = CourseData[index].path
    //     navigate(`/treemiti/course/${path}`, {state: {id: index}})
    // }


    const cartList = CourseData.map((data, index) => {
        const {img, name, path} = data
        return <CourseCart key={index} index={index} img={img} name={name} path={path} 
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