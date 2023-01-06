import React from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../images/logo.svg';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo' className='nav-img'/>
                    <button type='button' className='nav-btn'>
                        <FaBars/>
                    </button>
                </div>

                <div className='nav-content show-links'>
                    <ul className='nav-links'>
                        <li>
                            <a href='#' className='nav-link'>Features</a>
                        </li>
                        <li>
                            <a href='#' className='nav-link'>Pricing</a>
                        </li>
                        <li>
                            <a href='#' className='nav-link'>Resources</a>
                        </li>
                    </ul>

                    <hr className='nav-line'/>

                    <div className='nav-btns'>
                        <button type='button' className='login-btn'>Login</button>
                        <button type='button' className='signup-btn'>Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;