import React, {useState, useRef} from 'react';

import {useDetectOutsideClick} from '../CategoryPage/CategoryPageComponent/useDetectOutsideClick';

import {FaUserCircle} from 'react-icons/fa';
import {RiSearchLine} from 'react-icons/ri';

import {getAuth, signOut} from 'firebase/auth';
import './SearchBox.css';

const SearchBox = ({history}) => {

    const [userInput, setUserInput] = useState('');

    const sendUserInput = (e) => {
        const {value} = e.target;
        console.log('입력값', value);
        setUserInput(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput) {
            history.history.push(`/search/${userInput}`);
        }
    };

    return (
        <div className='top'>
            <section className='SearchBox-Wrapper'>
                <div className='SearchBox__Container'>
                    <form className='SearchBox' onSubmit={handleSubmit}>
                        <input
                            className='inputBox'
                            type='search'
                            name='search'
                            placeholder='가게이름 또는 메뉴로 검색'
                            onChange={sendUserInput}
                        />
                        <div className='SubmitButtonCase' onClick={handleSubmit}>
                            <RiSearchLine/>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SearchBox;
