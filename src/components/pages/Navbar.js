import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Button } from '../Button';
import logo from '../../images/logof.png'
import { IconContext } from 'react-icons/lib';
import './Navbar.css';

import {Link as LinkS} from 'react-scroll'

function Navbar() {
  
  const [scrollNav , setScrollNav] =  useState(false);
  const changeNav = () => {
    if(window.scrollY >= 80) {
        setScrollNav(true)
    }
    else{
        setScrollNav(false)
    }
  }

  const [click , setClick] = useState(false);
  const [button , setButton] = useState(true);

  const handleClick = () => setClick(!click);

 const closeMobileMenu = () => setClick(false);

 const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    } else {
        setButton(true)
    }
 }

 useEffect(() => {
    showButton();
    window.addEventListener('scroll' , changeNav);

 } , []);

window.addEventListener('resize' , showButton);

    return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <div className={scrollNav ? 'navbar' : 'navbar dnav'}>
      <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           {/* DIGITAL MINDSTORM */} 
             <img src={logo} width='170px'/>
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes/> : <FaBars/>} 
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                <li className='nav-item'>
                  <LinkS to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </LinkS>
                </li>

                <li className='nav-item'>
                  <LinkS to='services' smooth={true} duration={500} spy={true} exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                    Services
                  </LinkS>
                </li>

                <li className='nav-item'>
                  <LinkS to='vision' smooth={true} duration={500} spy={true} exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                    Vision
                  </LinkS>
                </li>
                
                <li className='nav-item'>
                  <LinkS to='pricing' smooth={true} duration={500} spy={true} exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                    Pricing
                  </LinkS>
                </li>

                <li className='nav-item'>
                  <LinkS to='team' smooth={true} duration={500} spy={true} exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                    Team
                  </LinkS>
                </li>


                <li className='nav-btn'>
                  {button ? (
                  <Link  to='/sign-up' className='btn-link'>
                  <Button  buttonStyle='btn--outline' >
                      CONTACT US
                  </Button>
                </Link>  
               ) : (
                <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                          SIGNUP
                    </Button>
                </Link>
               ) }
                  
                </li>


            </ul>
      </div>
    </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar