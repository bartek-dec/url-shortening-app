import React from 'react';
import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';
import {FaPinterest} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <h2 className='footer-heading'>Shortly</h2>
                <div className='footer-features'>
                    <h3 className='features-heading'>Features</h3>
                    <ul className='features-list'>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>

                <div className='footer-resources'>
                    <h3 className='resources-heading'>Resources</h3>
                    <ul className='resources-list'>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div className='footer-company'>
                    <h3 className='company-heading'>Company</h3>
                    <ul className='company-list'>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='footer-icons'>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className='footer-link'>
                        <span className='footer-img'><AiFillFacebook/></span>
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className='footer-link'>
                        <span className='footer-img'><AiOutlineTwitter/></span>
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className='footer-link'>
                        <span className='footer-img'><FaPinterest/></span>
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className='footer-link'>
                        <span className='footer-img'><AiOutlineInstagram/></span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;