import React from 'react';
import { useState } from 'react';
import Hamburger from 'hamburger-react'
import './Navbar.css'

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  return (
    <nav className='navbar'>
     <div className="container">
     <div className="menu-icon" onClick={handleShowNavbar}>
     <Hamburger />
      </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
         <ul>
            <li className='listElm'><a href='#about'>ABOUT ME</a></li>
            <li className='listElm'><a href='#projects'>PROJECTS</a></li>
            <li className='listElm'><a href='#skills'>SKILLS</a></li>
            <li className='listElm'><a href='#contact'>CONTACT</a></li>
        </ul>
        </div> 
      </div> 
    </nav>
  )
}

export default Navbar