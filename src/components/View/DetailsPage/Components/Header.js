import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import './Header.css';

const url = 'https://www.instagram.com/';

const Header = (props) => {
  let instagramAcc;
  if (props.instagramAccount) {
    instagramAcc = (
      <div className='details__instagram'>
        <FiInstagram
          style={{ strokeWidth: '1px' }}
          className='details__instagram__icon'
        />
        <p onClick={() => window.open(url + props.instagramAccount, '_parent')}>
          {props.instagramAccount}
        </p>
      </div>
    );
  } else {
  }

  // 인증업체여부 필터링
  let verfiedStore;
  if (props.storeVerified === true) {
    verfiedStore = <HiBadgeCheck />;
  }

  return (
    <div className='details__Header'>
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
      <div className='sns__container'>
        {instagramAcc}
        <div className='details__naver'>
          <img
            className='details__naver__icon'
            src='https://res.cloudinary.com/diimwnnmj/image/upload/v1620621770/n_j9cdkl.svg'
            alt=''
          />
          <p onClick={() => window.open(props.naverLink, '_parent')}>
            {props.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
