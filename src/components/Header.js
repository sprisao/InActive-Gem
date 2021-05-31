import React from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import './Header.css';

function Header() {
  return (
    <section className='header'>
      <div className='header__wrapper'>
        <div className='placeholder'></div>
        <Link to='/'>
          <div className='logo__container'>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1622384476/gem/%E1%84%80%E1%85%A9%E1%84%80%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%B7BI2_z0ghml.png'
              className='logo'
              alt='logo'
            />
          </div>
        </Link>
        <Link to='/search'>
          <div className='searchIcon__container'>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1622432596/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%8B%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3_rmmcly.png'
              alt=''
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Header;
