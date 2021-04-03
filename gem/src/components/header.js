import React from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/diimwnnmj/image/upload/v1616123198/GEM_-BI_fgzah7.png'
            className='logo'
            alt='gem'
          />
        </Link>
      </div>
      <div className='header__search'>
        <input className='header__search__box' type='search' name='search' />
        <GoSearch
          className='header__search__icon'
          style={{ fontSize: '1.25rem' }}
        />
      </div>
    </div>
  );
}

export default Header;
