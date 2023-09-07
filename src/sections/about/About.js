import React from 'react'
import './About.scss'
import CourseFeatures from '../../components/course-features/CourseFeatures'
import ServicesData from '../../ServicesData.json'


const About = () => {
  let serviceList = ServicesData.map((data, index) => {
    return <CourseFeatures key={index} index={index} img={data.img} name={data.name} path={data.path}/>
  })

  return (
    <section className='about-section'>
      <div className="container" id='about'>
        <h2>ABOUT TREEMITI</h2>
        <article>
          <p>In 2010, <strong>Treemiti Informatics</strong> was founded by <strong>Mr. Sandeep Chandorkar, Web Consultant</strong> with a vision to provide career-oriented education in Information Technologies. From its beginnings institute focused on the overall growth of a student to make them proficient IT professional.</p><br />
          <p>With experienced faculty and state-of-the-art infrastructure, Treemiti's students are highly sought after by employers like <strong>TCS, Capgemini, Accenture, Affinity, Ebrandz, First Cry, Infosys, ESDS, Netwin, Eluminous, Aress, Sunbird</strong> and many more. The institute has a track record of placing its graduates in some of the best companies in the country. With its commitment to quality and innovation.</p><br />
          <p>Today, the institute's vision is to provide the <strong>right guidance and right technology</strong> to help students achieve their career aspirations. Treemiti's courses are designed to meet the needs of the IT industry, and the institute has partnerships with some of the biggest names in the business. <strong>Treemiti Informatics</strong> has emerged as a premier institute in the field of information technology.</p><br />
          <p>So there is nothing to look back, if you have chosen Treemiti Informatics as your <strong>career guide.</strong> The future looks brights as ever. <strong>Good luck, to you.</strong></p>
        </article>
        <div className="course-features">
          <h3>Why Join Treemiti?</h3>
          <hr />
          <ul className='features-list'>
            {serviceList}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About