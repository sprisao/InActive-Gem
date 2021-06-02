import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import './Header.css';

const url = 'https://www.instagram.com/';

const Header = (props) => {
  // 인증업체여부 필터링
  let verfiedStore;
  if (props.storeVerified === true) {
    verfiedStore = <HiBadgeCheck />;
  }

  return (
    <div className='details__Header'>
      <div className='details__Header__Container'>
        <div className='details__shortDesc'>
          <h4>{props.shortDescription}</h4>
        </div>
        <div className='details__name'>
          <h1>{props.name}</h1>
          {verfiedStore}
        </div>
        <div className='details__tag'>
          {props.tags.map((tag) => {
            return <span key={tag}>#{tag} </span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
