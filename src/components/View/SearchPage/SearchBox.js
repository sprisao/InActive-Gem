import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import './SearchBox.css';

const SearchBox = (props) => {
  const sendUserInput = (e) => {
    props.getUserInput(e);
  };

  return (
    <section className='top'>
      <div className='SearchBox'>
        <div className='SearchBox__Container'>
          <FiSearch style={{ fontSize: '1.5rem', strokeWidth: '2.75px' }} />
          <input
            className='inputBox'
            type='search'
            name='search'
            placeholder='가게이름 또는 메뉴를 검색해보세요!'
            onChange={sendUserInput}
          />
        </div>
        {/* <FaBell style={{ fontSize: '2rem', color: '#888888' }} />
        <FaUserCircle style={{ fontSize: '2.5rem', color: '#888888' }} /> */}
      </div>
    </section>
  );
};

export default SearchBox;
