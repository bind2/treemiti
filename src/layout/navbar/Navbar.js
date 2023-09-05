import React from 'react'
import './Navbar.scss'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../images/home-img/treemiti-white-logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className="container" id='navbar'>
            <Link to='/treemiti/#'><img src={logo} alt="" /></Link>

            <ul>
                <li><Link to='/treemiti/#'>Home</Link></li>
                <li><Link to='/treemiti/#courses'>Courses</Link></li>
                <li><Link to='/treemiti/#about'>About us</Link></li>
                <li><Link to='/treemiti/#testimonials'>Testimonials</Link></li>
                <li><Link to='/treemiti/#placements'>Placements</Link></li>
                <li><Link to='/treemiti/#guidance'>Guidance</Link></li>
                <li><Link to='/treemiti/#contact'>Contact</Link></li>
            </ul>

            <div className="menu"></div>

        </div>
    </nav>
  )
}

export default Navbar