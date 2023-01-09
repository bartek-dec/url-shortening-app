import React from 'react';

const Link = ({link, shortLink}) => {
    return (
        <article className='links'>
            <h3 className='link'>{link}</h3>
            <hr className='line'/>
            <h3 className='link-short'>{shortLink}</h3>
            <button type='button' className='link-btn'>Copy</button>
        </article>
    );
};

export default Link;