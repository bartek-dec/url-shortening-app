import React from 'react';

const Form = () => {
    return (
        <section className='form-section'>
            <form className='form'>
                <div className='form-row'>
                    <input type='text' className='form-input' placeholder='Shorten a link here...'/>
                    <p className='alert show'>Please add a link</p>
                </div>
                <button type='submit' className='form-btn'>Shorten it!</button>
            </form>
        </section>
    );
};

export default Form;