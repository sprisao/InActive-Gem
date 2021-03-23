import React from 'react';
import { GoSearch } from 'react-icons/go';

function Header() {
  return (
    <div class='header'>
      <div class='header__logo'>
        <a href='index.html'>
          <img
            src='https://res.cloudinary.com/diimwnnmj/image/upload/v1616123198/GEM_-BI_fgzah7.png'
            class='logo'
            alt='gem'
          />
        </a>
      </div>
      <div class='header__search'>
        <input class='header__search__box' type='search' name='search' />
        <GoSearch size='1.2em' className='header__search__icon' />
      </div>
    </div>
  );
}

export default Header;
