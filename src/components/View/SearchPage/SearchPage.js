import React, { useState } from 'react';
import SearchResults from './SearchResults';
import { GoSearch } from 'react-icons/go';

import './SearchPage.css';

const SearchPage = () => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setUserInput(value);
  };

  console.log(userInput);

  return (
    <section className='searchPage'>
      <div className='searchBox__container'>
        <input
          className='searchBox'
          type='search'
          name='search'
          placeholder='가게이름 또는 메뉴를 검색해보세요! (예: 까치둥지, 알탕)'
          onChange={handleChange}
        />
      </div>
      <SearchResults userInput={userInput} />
    </section>
  );
};

export default SearchPage;
