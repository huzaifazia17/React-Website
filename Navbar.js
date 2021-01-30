import React, {useState} from 'react'
import {Link} from 'react-router-dom' // keeps UI in sync with URL
import { FaReact } from 'react-icons/fa' // icon beside logo
import {FaBars, FaTimes} from 'react-icons/fa' // These are react icons from react website
import {Button} from './Button.js';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';
 
function Navbar() {  

    const [click, setClick] = useState(false);
    const [button, setButton]=useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false); // state to close mobile menu

    const showButton = ()=> {
        if(window.innerwidth <= 900) {
            setButton(false)
        }else {
            setButton(true)
        }    
    };
    window.addEventListener('resize', showButton);
    return ( // returns this component to root:: shortcut to create class, .Classname then tab
        <> 
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='navbar'>  
                <div className='navbar-container container'>
                    <Link to='/'className='navbar-logo' onClick={closeMobileMenu}> 
                        <FaReact className='navbar-icon' /> 
                        HUZAIFA ZIA
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />} 
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                                Home
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link to='/projects' className='nav-Links' onClick={closeMobileMenu}>
                                Projects
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link to='/future' className='nav-Links' onClick={closeMobileMenu}>
                                Future
                            </Link>

                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/contact' className="btn-link">
                                    <Button buttonStyle='btn--outline'>
                                        CONTACT
                                    </Button>

                                </Link>
                            ) : (
                                <Link to='/contact' className='btn-link'onClick={closeMobileMenu}  >
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile' >
                                    CONTACT
                                </Button>
                                </Link>
                            )} 

                        </li>

                    </ul>
                </div>

            </div>
            </IconContext.Provider>
        </>
    )
}
export default Navbar;

// Notes: Curly braces means Javascript being used
// ?= if := else
// <ul> is to specify a list that is not ordered
// <li> an item is that is part of a list