import React from 'react'
import './Navbar.scss'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../images/home-img/treemiti-white-logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className="container" id='navbar'>
            <Link to='/#'><img src={logo} alt="" /></Link>

            <ul>
                <li><Link to='/#'>Home</Link></li>
                <li><Link to='/#courses'>Courses</Link></li>
                <li><Link to='/#about'>About us</Link></li>
                <li><Link to='/#testimonials'>Testimonials</Link></li>
                <li><Link to='/#placements'>Placements</Link></li>
                <li><Link to='/#guidance'>Guidance</Link></li>
                <li><Link to='/#contact'>Contact</Link></li>
            </ul>

            <div className="menu"></div>

        </div>
    </nav>
  )
}

export default Navbar