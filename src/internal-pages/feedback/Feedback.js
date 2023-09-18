import React from 'react'
import { Outlet } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Feedback = () => {
  return (
    <>
      <section className='feedback-navigation-section'>
        <div className="container" id='feedback-navitation'>
          <Link to='/treemiti/feedback/student-feedback'>Student feedback</Link>
          <Link to='/treemiti/feedback/employe-feedback'>Employe feedback</Link>
        </div>
      </section>

      <section className='feedback-section'>
        <div className='container' id='feedback'>
          <div className="feedback-container">
            <Outlet />
          </div>
        </div>
      </section>
    </>

  )
}

export default Feedback