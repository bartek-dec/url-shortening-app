import React, {useEffect, useRef} from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../images/logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {toggleNavbar, closeNavbar} from "../features/navbar/navbarSlice";

const Navbar = () => {
    const {isOpen} = useSelector((state) => state.navbar);
    const dispatch = useDispatch();
    const navContentRef = useRef(null);
    const linksRef = useRef(null);
    const lineRef = useRef(null);
    const btnsRef = useRef(null);
    const hrLineMargins = 30;

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        const lineHeight = lineRef.current.getBoundingClientRect().height;
        const btnsHeight = btnsRef.current.getBoundingClientRect().height;

        if (isOpen) {
            navContentRef.current.style.height = `${linksHeight + lineHeight + btnsHeight + hrLineMargins}px`;
        } else {
            navContentRef.current.style.height = '0px';
        }
    }, [isOpen]);

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo' className='nav-img'/>
                    <button type='button' className='nav-btn' onClick={() => dispatch(toggleNavbar())}>
                        <FaBars/>
                    </button>
                </div>

                <div className='nav-content' ref={navContentRef}>
                    <ul className='nav-links' ref={linksRef}>
                        <li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href='#' className='nav-link' onClick={() => dispatch(closeNavbar())}>Features</a>
                        </li>
                        <li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href='#' className='nav-link' onClick={() => dispatch(closeNavbar())}>Pricing</a>
                        </li>
                        <li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href='#' className='nav-link' onClick={() => dispatch(closeNavbar())}>Resources</a>
                        </li>
                    </ul>

                    <hr className='line' ref={lineRef}/>

                    <div className='nav-btns' ref={btnsRef}>
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