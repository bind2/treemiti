import React, { useState } from 'react'
// import './Navbar.scss'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../logo-img/treemiti-white-logo.png'
const Navbar = () => {
  const [state, setState] = useState({menu: true})

  const showHide = ()=>{
    setState({menu: !state.menu})
  }


  return (
    <nav>
      <div className="container" id='navbar'>
        <Link to='/treemiti/#'><img src={logo} alt="logo" /></Link>

        <ul className={state.menu ? 'nav-links' : 'nav-links-active'}>
          <li onClick={showHide}><Link to='/treemiti/#'>Home</Link></li>
          <li onClick={showHide}><Link to='/treemiti/#courses'>Courses</Link></li>
          <li onClick={showHide}><Link to='/treemiti/#about'>About us</Link></li>
          <li onClick={showHide}><Link to='/treemiti/#testimonials'>Testimonials</Link></li>
          <li onClick={showHide}><Link to='/treemiti/#placements'>Placements</Link></li>
          <li onClick={showHide}><Link to='/treemiti/#guidance'>Guidance</Link></li>
          <li onClick={showHide}><Link to='/treemiti/#contact'>Contact</Link></li>
        </ul>

        {/* <div>qr</div> */}

        <div className={state.menu ? "menu-bar" : "menu-bar menu-bar-active"} onClick={showHide}>
          <span className='menu-name'>menu</span>
          <span className={state.menu ? 'menu-icon' : 'menu-icon menu-active'}></span>
        </div>

      </div>
    </nav>
  )
}

export default Navbar