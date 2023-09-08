import React, { useEffect } from 'react'
// import './Navbar.scss'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../logo-img/treemiti-white-logo.png'
const Navbar = () => {
  useEffect(() => {
    const menuBar = document.querySelector(".menu-bar")
    const menuIcon = document.querySelector(".menu-icon")
    const navLinks = document.querySelector(".nav-links")
    menuBar.addEventListener('click', () => {
      menuBar.classList.toggle('menu-bar-active')
      menuIcon.classList.toggle('menu-active')
      navLinks.classList.toggle('nav-links-active')
    })
  })
  return (
    <nav>
      <div className="container" id='navbar'>
        <Link to='/treemiti/#'><img src={logo} alt="logo" /></Link>

        <ul className='nav-links'>
          <li><Link to='/treemiti/#'>Home</Link></li>
          <li><Link to='/treemiti/#courses'>Courses</Link></li>
          <li><Link to='/treemiti/#about'>About us</Link></li>
          <li><Link to='/treemiti/#testimonials'>Testimonials</Link></li>
          <li><Link to='/treemiti/#placements'>Placements</Link></li>
          <li><Link to='/treemiti/#guidance'>Guidance</Link></li>
          <li><Link to='/treemiti/#contact'>Contact</Link></li>
        </ul>

        {/* <div>qr</div> */}

        <div className="menu-bar">
          <span className='menu-name'>menu</span>
          <span className='menu-icon'></span>
        </div>

      </div>
    </nav>
  )
}

export default Navbar