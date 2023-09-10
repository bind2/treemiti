import React from 'react'
// import './Header.scss'
import dropdownImg from '../../img/dropdown.png'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
  return (
    <header>
      <div className="container" id='header'>
        <h1>Creating</h1>
        <h1>Professionals</h1>
        {/* <h1>Personalities</h1> */}

        <h3>Our Philosophy</h3>
        <p>When your basics are clear, you can comfortably fit yourself with evolving technolog</p>
        <p>For instance, if you know how to drive a manual car, you won’t need any time to learn the automatic one.</p>
        <Link to='/treemiti/#courses'>
          <img src={dropdownImg} alt="img" />
        </Link>
      </div>
    </header>
  )
}

export default Header