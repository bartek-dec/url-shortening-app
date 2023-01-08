import React from 'react';
import brand from '../images/icon-brand-recognition.svg';
import records from '../images/icon-detailed-records.svg';
import custom from '../images/icon-fully-customizable.svg';

const Statistics = () => {
    return (
        <section className='stats'>
            <div className='stats-info'>
                <h2 className='stats-heading'>Advanced Statistics</h2>
                <p className='stats-text'>Track how your links are performing across the web with our advanced
                    statistics dashboard.</p>
            </div>

            <div className='cards-container'>
                <article className='card brand'>
                    <h2 className='card-heading'>Brand Recognition</h2>
                    <p className='card-text'>Boost your brand recognition with each click. Generic links don't mean a
                        thing. Branded links help instill confidence in your content.</p>
                    <div className='brand-img'>
                        <img src={brand} alt='brand icon'/>
                    </div>
                </article>

                <article className='card records'>
                    <h2 className='card-heading'>Detailed Records</h2>
                    <p className='card-text'>Gain insights into who is clicking your links. Knowing when and where
                        people engage with your content helps inform better decisions.</p>
                    <div className='records-img'>
                        <img src={records} alt='records icon'/>
                    </div>
                </article>

                <article className='card custom'>
                    <h2 className='card-heading'>Fully Customizable</h2>
                    <p className='card-text'>Improve brand awareness and content discoverability through customizable
                        links, supercharging audience engagement.</p>
                    <div className='custom-img'>
                        <img src={custom} alt='custom icon'/>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Statistics;