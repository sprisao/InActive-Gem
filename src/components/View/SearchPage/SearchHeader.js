import React from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import './SearchHeader.css';

function Header() {
  return (
    <section className='header'>
      <div className='searchHeader__wrapper'>
        <Link to='/'>
          <div className='logo__container'>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1620457721/%E1%84%80%E1%85%A9%E1%84%80%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%B7BI_fpwc2t.png'
              className='logo'
              alt='logo'
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Header;
