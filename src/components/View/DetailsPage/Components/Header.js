import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import './Header.css';

const Header = (props) => {
  return (
    <div className='details__Header'>
      <div className='details__shorDesc'>
        <h4>{props.shortDescription}</h4>
      </div>
      <div className='details__name'>
        <h1>{props.name}</h1>
        <HiBadgeCheck />
      </div>
      <div className='details__tag'>
        {props.tags.map((tag) => {
          return tag;
        })}
        <p>#돈까스맛집 #혁신도시맛집 #젬인증맛집 </p>
      </div>
    </div>
  );
};

export default Header;
