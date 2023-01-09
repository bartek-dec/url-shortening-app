import React from 'react';
import {Navbar, Hero, Statistics, GetStarted, Footer, LinksContainer} from '../components';

const LandingPage = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <LinksContainer/>
            <Statistics/>
            <GetStarted/>
            <Footer/>
        </>
    );
};

export default LandingPage;