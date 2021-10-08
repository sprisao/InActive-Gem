import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
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
    <section className='top'>
      <div className='SearchBox'>
        <form className='SearchBox__Container' onSubmit={handleSubmit}>
          <input
            className='inputBox'
            type='search'
            name='search'
            placeholder='가게이름 또는 메뉴를 검색해보세요!'
            onChange={sendUserInput}
          />
          <div className='SubmitButtonCase' onClick={handleSubmit}>
            <span>검색</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBox;
