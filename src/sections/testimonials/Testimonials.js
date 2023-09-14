import React from 'react'
import Button from '../../components/button/Button'
// import './Testimonials.scss'
import { HashLink as Link } from 'react-router-hash-link'

const Testimonials = () => {
  return (
    <section className='testimonials-section'>
        <div className="container" id='testimonials'>
            <h2>REVIEWS ON TREEMITI</h2>
            <div className='feedback-container'>
              <div className='feedback-box'>
                <h3>Students Feedback</h3>
                
                <Link to='/treemiti/feedback/student-feedback#'><Button name='See all reviews'/></Link>
              </div>
              <div className='feedback-box'>
                <h3>Employers Feedback</h3>
                
                <Link to='/treemiti/feedback/student-feedback#'><Button name='See all reviews'/></Link>
              </div>
            </div>            
        </div>
    </section>
  )
}

export default Testimonials