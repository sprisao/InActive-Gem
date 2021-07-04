import React from 'react';
import { Link } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import './Header.css';

function Header() {
  return (
    <section className='header'>
      <div className='header__wrapper'>
        <div className='spaceholder'></div>
        <Link to='/'>
          <div className='logo__container'>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1624505613/%E1%84%8C%E1%85%A6%E1%86%B7-%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%B5-%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF-%E1%84%86%E1%85%B5%E1%86%BE-%E1%84%89%E1%85%B5%E1%86%B7%E1%84%87%E1%85%A9%E1%86%AF-%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_kiawpo.png'
              className='logo'
              alt='logo'
            />
          </div>
        </Link>
        <div className='sharingGem__button'>
          {/* <img src="https://res.cloudinary.com/diimwnnmj/image/upload/v1624590337/message_wnwz94.png" alt="share" /> */}
          {/* <FiSend
            style={{
              fontSize: '1.65rem',
              marginBottom: '0.25rem ',
              strokeWidth: '1.75px',
            }}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Header;
