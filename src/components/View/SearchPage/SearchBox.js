import React, { useState } from 'react';
import { useGlobalContext } from '../../context';

import { FaUserCircle, FaBell } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import './SearchBox.css';

const SearchBox = ({ history }) => {
  const { stores, restaurants, cafes } = useGlobalContext();
  const [userInput, setUserInput] = useState('');

  const sendUserInput = (e) => {
    const { value } = e.target;
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
            <RiSearchLine />
          </div>
        </form>
      </div>
      <div className='Notification_Button'>
        <FaBell />
      </div>
      <div className='Profile_Button'>
        <FaUserCircle />
      </div>
    </section>
  );
};

export default SearchBox;
