import React from 'react';
import { Link } from 'react-router-dom';
import './SearchHeader.css';

function Header() {
  return (
    <section className='header'>
      <div className='searchHeader__wrapper'>
        <Link to='/'>
          <div className='logo__container'>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1622384476/gem/%E1%84%80%E1%85%A9%E1%84%80%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%B7BI2_z0ghml.png'
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
