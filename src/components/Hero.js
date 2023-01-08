import React from 'react';
import Form from "./Form";

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container-img'></div>
            <div className='hero-content'>
                <h1 className='hero_heading'>More than just shorter links</h1>
                <p className='header-text'>Build your brand's recognition and get detailed insights on how your links
                    are performing</p>
                <button type='button' className=' btn get-started-btn'>Get Started</button>
            </div>

            <Form/>
        </section>
    );
};

export default Hero;