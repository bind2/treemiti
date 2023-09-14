import React from 'react'
import AboutData from '../../data/AboutData.json'
import CourseData from '../../data/CourseData.json'
import CourseCart from '../../components/course-cart/CourseCart'
import { NavLink as Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import CourseFeatures from '../../components/course-features/CourseFeatures'

const StudentSupport = () => {
  // const location = useLocation()
  //   let index = location.state.id
  // const [state, setState] = useState(index)

  // const getData = (index) => {
  //   setState(index)
  // }

  const param = useParams()

  const { name, thumbnail, discription } = AboutData[param.id]
  document.title = name

  let serviceList = AboutData.map((data, index) => {
    const { img, name, path } = data
    const [fname, lname] = name.split(" ")
    return <li key={index}>
      <Link to={`/treemiti/about/${path}/${index}#`}>
        <figure>
          <img src={'../.' + img} alt="img"></img>
        </figure>
        <h3>{fname}<br />{lname}
        </h3>
      </Link>
    </li>
  })

  const cartList = CourseData.map((data, index) => {
    const { img, name, path } = data
    return <CourseCart
      key={index}
      index={index}
      img={'../.' + img}
      name={name}
      path={path}
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
            <img src={'../.' + thumbnail} alt="img" />
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