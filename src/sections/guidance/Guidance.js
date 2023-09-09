import React from 'react'
import Button from '../../components/button/Button'
// import './Guidance.scss'

const Guidance = () => {
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
            <Button name='Click for more information' to='/'/>
          </div>
          <div>
            <h3>Guidance Registration Form</h3>

            <form action="">
              <div className='name-field'>
                <input type="text" placeholder='Your name' required/>
              </div>

              <div className='box'>
                <div className='number-field'>
                  <input type="text" placeholder='Mobile number' required/>
                </div>
                <div className='email-field'>
                  <input type="email" placeholder='Email id' required/>
                </div>
              </div>

              <div className='box'>
                <div className='number-field'>
                  <input type="text" placeholder='Your Name' />
                </div>
                <div className='email-field'>
                  <input type="text" placeholder='Your Name' />
                </div>
              </div>

              <textarea name="" id="" cols="30" rows="7" placeholder='Comment your interest and / or field for which guidance is needed'></textarea>

              <Button type='submit' name='Submit Registration'/>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guidance