import React from 'react'
import './Footer.scss'
import footerLogo from '../../logo-img/Treemiti-Informatics.jpg'

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container" id='footer'>
          <div>
            <div>
              <img src={footerLogo} alt="" />
            </div>
            <div>
              <address>
                <h6>ADDRESS</h6>
                <p>Block 3, 1st Floor, Bhagyalaxmi Apartment, Opp. Model Colony, College Road, Nashik, Maharashtra 422005, INDIA</p>
              </address>
              <address>
                <h6>CONTACT</h6>
                {/* <ul> */}
                <li><a href="tel:+919579573923">+919579573923</a></li>
                <li><a href="https://wa.me/message/TVRE4NDLNHBOB1">whatsapp</a></li>
                <li><a href="mailto:contact@treemiti.com">contact@treemiti.com</a></li>
                <li><a href="http://treemiti.com">www.treemiti.com</a></li>
                {/* </ul> */}
              </address>
              <ul>
                <h6>OUR GROUP</h6>
                <li><a href="#">Treemiti Infotech</a></li>
                <li><a href="#">Treemiti Interiors</a></li>
                <li><a href="http://hosting.treemiti.com">Treemiti Hosting</a></li>
              </ul>
              <ul>
                <h6>SUPPORT</h6>
                <li><a href="#">Self Development</a></li>
                <li><a href="#">Career Guidance</a></li>
                <li><a href="#">Online Education</a></li>
                <li><a href="#">Placement Cell</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className='copyright'>
        <div className='container'>
          <p>© Copyright 2012. All rights reserved by Treemiti. Designed & Developed by Treemiti Infotech</p>
          <p>Privacy Policy | Disclaimer</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer