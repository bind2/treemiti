import React from 'react'
import './About.scss'
import CourseFeatures from '../../components/course-features/CourseFeatures'

const About = () => {
  return (
    <section className='about-section'>
      <div className="container" id='about'>
        <h2>ABOUT TREEMITI</h2>
        <article>
          <p>In 2010, Treemiti Informatics was founded by Mr. Sandeep Chandorkar, Web Consultant with a vision to provide career-oriented education in Information Technologies. From its beginnings institute focused on the overall growth of a student to make them proficient IT professional.</p><br />
          <p>With experienced faculty and state-of-the-art infrastructure, Treemiti's students are highly sought after by employers like TCS, Capgemini, Accenture, Affinity, Ebrandz, First Cry, Infosys, ESDS, Netwin, Eluminous, Aress, Sunbird and many more. The institute has a track record of placing its graduates in some of the best companies in the country. With its commitment to quality and innovation.</p><br />
          <p>Today, the institute's vision is to provide the right guidance and right technology to help students achieve their career aspirations. Treemiti's courses are designed to meet the needs of the IT industry, and the institute has partnerships with some of the biggest names in the business. Treemiti Informatics has emerged as a premier institute in the field of information technology.</p><br />
          <p>So there is nothing to look back, if you have chosen Treemiti Informatics as your career guide. The future looks brights as ever. Good luck, to you.</p>
        </article>
        <div className="course-features">
          <h3>Why Join Treemiti?</h3>
          <hr />
          <CourseFeatures />
        </div>
      </div>
    </section>
  )
}

export default About