import React from 'react'
// import './CareerGuidance.scss'
import ServicesData from '../../ServicesData.json'
import Data from '../../Data.json'
import CourseCart from '../../components/course-cart/CourseCart'
import { NavLink as Link, useParams } from 'react-router-dom'
const CareerGuidance = () => {

  const params = useParams()
  const { name, thumbnail, discription } = ServicesData[params.id]
  document.title = name

  let serviceList = ServicesData.map((data, index) => {
    return <li key={index}><Link to={`/treemiti/${index}#`}><figure><img src={data.img} alt="" /></figure><h3>{data.name}</h3></Link></li>
  })

  const cartList = Data.map((data, index) => {
    return <CourseCart
      key={index}
      index={index}
      img={data.img}
      name={data.name}
      path={data.path}
    />
  })

  return (
    <section className='career-guidance-section'>
      <div className='container' id='career-guidance'>
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

export default CareerGuidance