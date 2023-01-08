import React from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../images/logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {toggleNavbar, closeNavbar} from "../features/navbar/navbarSlice";

const Navbar = () => {
    const {isOpen} = useSelector((state) => state.navbar);
    const dispatch = useDispatch();

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo' className='nav-img'/>
                    <button type='button' className='nav-btn' onClick={() => dispatch(toggleNavbar())}>
                        <FaBars/>
                    </button>
                </div>

                <div className={isOpen ? 'nav-content show-links' : 'nav-content'}>
                    <ul className='nav-links'>
                        <li>
                            <a href='#' className='nav-link' onClick={() => dispatch(closeNavbar())}>Features</a>
                        </li>
                        <li>
                            <a href='#' className='nav-link' onClick={() => dispatch(closeNavbar())}>Pricing</a>
                        </li>
                        <li>
                            <a href='#' className='nav-link' onClick={() => dispatch(closeNavbar())}>Resources</a>
                        </li>
                    </ul>

                    <hr className='line'/>

                    <div className='nav-btns'>
                        <button type='button' className='login-btn' onClick={() => dispatch(closeNavbar())}>Login
                        </button>
                        <button type='button' className='signup-btn' onClick={() => dispatch(closeNavbar())}>Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;