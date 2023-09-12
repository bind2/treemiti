import React from 'react'
// import './CareerGuidance.scss'
import AboutData from '../../data/AboutData.json'
import CourseData from '../../data/CourseData.json'
import CourseCart from '../../components/course-cart/CourseCart'
import { NavLink as Link, useParams } from 'react-router-dom'
const StudentSupport = () => {

  const params = useParams()
  const { name, thumbnail, discription } = AboutData[params.id]
  document.title = name

  let serviceList = AboutData.map((data, index) => {
    const [fname, lname] = data.name.split(" ")
    return <li key={index}><Link to={`/treemiti/${index}#`}><figure><img src={data.img} alt="" /></figure><h3>{fname}<br/>{lname}</h3></Link></li>
  })

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
    <section className='student-support-section'>
      <div className='container' id='student-support'>
        <h2>TREEMITI STUDENT SUPPORT</h2>
        <ul className='features-list'>
          {serviceList}
        </ul>
        <h3>{name}</h3>
        <div className='about-guidance'>
          <figure>
            <img src={thumbnail} alt="" />
          </figure>
          <article dangerouslySetInnerHTML={{ __html: discription }}></article>
        </div>
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

export default StudentSupport