import React from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import './Header.css';

function Header() {
  return (
    <section className='header'>
      <div className='header__wrapper'>
        <div className='header-logo'>
          <Link to='/'>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1620457721/%E1%84%80%E1%85%A9%E1%84%80%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%B7BI_fpwc2t.png'
              className='logo'
              alt='logo'
            />
          </Link>
        </div>
        <div className='header-search'>
          <input className='header-searchBox' type='search' name='search' />
          <GoSearch
            className='header-searchIcon'
            style={{ fontSize: '1.25rem' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
