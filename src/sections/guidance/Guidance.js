import React from 'react'
import Button from '../../components/button/Button'
import { HashLink as Link } from 'react-router-hash-link'

const Guidance = () => {
  const submitHandler = (e) =>{
    e.preventDefault()
    alert('submit form')
  }
  return (
    <section className='guidance-section'>
      <div className="container" id='guidance'>
        <h2>CAREER GUIDANCE</h2>
        <div className="guidance-container">
          <div>
            <h3>Why Career Guidance?</h3>
            <article>
              <p>In today's world when numerous fields are available to <strong>build career</strong> knowing which one suited best for ourself is very important. <strong>One can excel himself / herself with the field which keep his / her interest alive.</strong> Many a times students are not able to decide which is the right field for them. Even parents are not able to understand which is the best suited field for their child. This all happen due to <strong>unawareness of current and future requirements</strong> in the various fields.</p>
              <br />
              <p><strong>We at Treemiti Informatics help students to take right decision related to their career by knowing their interest, aptitude, attitude and comfort with various tests guided by knowledgeable counselor.</strong> We also conduct number of workshops and seminars to create awareness about old and newly trending career opportunities in the industry.</p>
              <br />
              <p>If you think the same way as we think contact us for career guidance. <strong>World of unleash opportunities are waiting for you</strong></p>
            </article>
            <Link to='/treemiti/career-guidance#'><Button name='Click for more information'/></Link>
          </div>

          <div>
            <h3>Guidance Registration Form</h3>
            <form onSubmit={submitHandler}>
              <div className='name-field'>
                <input type="text" placeholder='Your Name' name='name' required />
              </div>
              <div className='field-box'>
                <div >
                  <input type="text" placeholder='Mobile Number' name='number' required />
                </div>
                <div >
                  <input type="email" placeholder='Email id' name='email' required />
                </div>
              </div>
              <div className='field-box'>
                <div >
                  <select>
                    <option>Select Education</option>
                    <option value="HSC">HSC</option>
                    <option value="SSC">SSC</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Gradute">Post Graduate</option>
                    <option value="Doctorate">Doctorate</option>
                  </select>
                </div>
                <div >
                  <select>
                    <option>Working Status</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="In Service">In Service</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Business Owner">Business Owner</option>
                  </select>
                </div>
              </div>
              <textarea cols="30" rows="3" placeholder='Comment your interest and / or field for which guidance is needed'></textarea>
              <Button type='submit' name='Submit Registration' />
            </form>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Guidance