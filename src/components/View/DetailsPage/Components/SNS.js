import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import './SNS.css';

const SNS = (props) => {
  const url = 'https://www.instagram.com/';

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
  return (
    <div className='sns__container'>
      {instagramAcc}
      <div className='details__naver'>
        <img
          className='details__naver__icon'
          src='https://res.cloudinary.com/diimwnnmj/image/upload/v1622604901/naver_yyd7dl.png'
          alt='네이버 아이콘'
        />
        <p onClick={() => window.open(props.naverLink, '_parent')}>
          {props.name}
        </p>
        <br />
      </div>
      <p
        style={{
          fontSize: '0.8rem',
          marginTop: '0.35rem',
          color: '#a8a8a8',
        }}
      >
        *클릭하면 링크로 이동합니다.
      </p>
    </div>
  );
};

export default SNS;
