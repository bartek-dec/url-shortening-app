import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setInputLink, setIsInputEmpty, getShortLink} from '../features/form/formSlice';

const Form = () => {
    const {inputLink, isInputEmpty} = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const handleChange= (e) => {
        dispatch(setIsInputEmpty(false));
        dispatch(setInputLink(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputLink) {
            dispatch(setIsInputEmpty(true));
            return;
        }
        dispatch(setInputLink(inputLink));
        dispatch(getShortLink(inputLink));
    }

    return (
        <section className='form-section'>
            <form className='form'>
                <div className='form-row'>
                    <input type='text' className='form-input' placeholder='Shorten a link here...' value={inputLink}
                           onChange={handleChange}/>
                    <p className={isInputEmpty ? 'alert show' : 'alert'}>Please add a link</p>
                </div>
                <button type='submit' className='form-btn' onClick={handleSubmit}>Shorten it!</button>
            </form>
        </section>
    );
};

export default Form;