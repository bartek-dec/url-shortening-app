import React from 'react';
import Spinner from "./Spinner";
import Link from "./Link";
import Error from "./Error";
import {useSelector} from "react-redux";

const LinksContainer = () => {
    const {isLoading, links, isError} = useSelector((state) => state.form);

    if (isError) {
        return (
            <section className='links-container'>
                <Error/>
                {links.map((item, index) => {
                    const {link, shortLink} = item;
                    return <Link key={index} id={index} link={link} shortLink={shortLink}/>
                })}
            </section>
        );
    }

    return (
        <section className='links-container'>
            {isLoading && <Spinner/>}
            {links.map((item, index) => {
                const {link, shortLink} = item;
                return <Link key={index} id={index} link={link} shortLink={shortLink}/>
            })}
        </section>
    );
};

export default LinksContainer;