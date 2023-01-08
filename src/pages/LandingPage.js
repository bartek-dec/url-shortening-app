import React from 'react';
import {Navbar, Hero, Statistics, GetStarted, Footer} from '../components';

const LandingPage = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Statistics/>
            <GetStarted/>
            <Footer/>
        </>
    );
};

export default LandingPage;