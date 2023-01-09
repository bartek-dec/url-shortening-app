import React, {useState, useEffect} from 'react';

const Link = ({id, link, shortLink}) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setIsCopied(false);
        }, 3000);

        return () => {
            clearTimeout(timeOutId);
        }
    }, [isCopied]);

    const copyToClipboard = async (payload) => {
        try {
            await navigator.clipboard.writeText(payload);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = (e) => {
        const btnId = Number(e.target.dataset.id);
        if (btnId === id) {
            setIsCopied(true);
        }
        copyToClipboard(shortLink);
    }

    return (
        <article className='links'>
            <h3 className='link'>{link}</h3>
            <hr className='line'/>
            <h3 className='link-short'>{shortLink}</h3>
            <button data-id={id} type='button' className={isCopied ? 'link-copied' : 'link-btn'}
                    onClick={handleClick}>{isCopied ? 'Copied!' : 'Copy'}</button>
        </article>
    );
};

export default Link;