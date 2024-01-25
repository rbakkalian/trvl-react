import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlane, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './Button';
import './NavBar.css'

library.add(faBars, faXmark, faPlane);

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // for the hamburger
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link 
                to= "/" 
                className='navbar-logo' 
                onClick={closeMobileMenu}>
                    TRVL <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <FontAwesomeIcon icon={click ? faXmark : faBars} className='fa-icon'/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link 
                    to='/' 
                    className='nav-links' 
                    onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link 
                    to='/services' 
                    className='nav-links' 
                    onClick={closeMobileMenu}>
                      Services
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link 
                    to='/products' 
                    className='nav-links' 
                    onClick={closeMobileMenu}>
                      Products
                    </Link>
                  </li>

                  <li>
                    <Link 
                    to='/sign-up'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
                <Link to='/sign-up'>
                  {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </Link>
            </div>
        </nav>
    </>
  );
}

export default NavBar
