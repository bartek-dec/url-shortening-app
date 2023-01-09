import React from 'react';
import Spinner from "./Spinner";
import Link from "./Link";
import {useSelector} from "react-redux";

const LinksContainer = () => {
    const {isLoading, links} = useSelector((state) => state.form);

    return (
        <section className='links-container'>
            {isLoading && <Spinner/>}
            {links.map((link, index) => {
                return <Link key={index} {...link}/>
            })}
        </section>
    );
};

export default LinksContainer;