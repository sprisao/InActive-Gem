import React, { useState, useRef } from 'react';
import { useGlobalContext } from '../../context';
import { FiSearch } from 'react-icons/fi';
import './SearchBox.css';

const SearchBox = ({ history }) => {
  const { stores, restaurants, cafes } = useGlobalContext();
  const [userInput, setUserInput] = useState('');

  const inputRef = useRef();
  const inputFocus = () => {
    inputRef.current.focus();
    console.log('포커스 되야지', inputRef.current);
  };

  const sendUserInput = (e) => {
    const { value } = e.target;
    console.log('입력값', value);
    setUserInput(value);
  };

  const allStores = stores.concat(restaurants, cafes);
  const categoryFilter = allStores.filter((result) =>
    result.firstCategory[0].includes(userInput)
  );
  const nameFilter = allStores.filter((result) =>
    result.name.includes(userInput)
  );

  const tagFilter = allStores.filter((result) => {
    if (result.Search.includes(userInput)) console.log(result.Search);
  });

  console.log('카테고리검색결과', categoryFilter);
  console.log('업체이름검색결과', nameFilter);
  console.log('태그 검색결과', tagFilter);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.history.push(`/search/${userInput}`);
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
            onClick={inputFocus}
            ref={inputRef}
          />
          <div className='SubmitButtonCase' onClick={handleSubmit}>
            <FiSearch style={{ fontSize: '1.5rem', strokeWidth: '2.75px' }} />
          </div>
          {/* <input type='submit' value='검색' /> */}
        </form>
      </div>
    </section>
  );
};

export default SearchBox;
