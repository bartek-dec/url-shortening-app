import React from 'react';
import {useSelector} from "react-redux";

const Error = () => {
    const {errorMsg} = useSelector((state) => state.form);

    return (
        <section className='message-section'>
            <h1 className='message-heading'>{errorMsg}</h1>
        </section>
    );
};

export default Error;