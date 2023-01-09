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
                {links.map((link, index) => {
                    return <Link key={index} {...link}/>
                })}
            </section>
        );
    }

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