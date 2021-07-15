import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import './DetailsHeader.css';

const url = 'https://www.instagram.com/';

const DetailsHeader = (props) => {
  // 인증업체여부 필터링
  let verfiedStore;
  if (props.storeVerified === true) {
    verfiedStore = (
      <HiBadgeCheck style={{ fontSize: '1rem', color: '#f21d73' }} />
    );
  }
  // 인스타그램 계정 필터링
  let instagramAcc;
  if (props.instagramAccount) {
    instagramAcc = (
      <div
        className='details__Header__Instagram'
        onClick={() => window.open(url + props.instagramAccount, '_blank')}
      >
        <p>인스타그램</p>
      </div>
    );
  } else
    instagramAcc = (
      <div className='details__Header__Instagram'>
        <p style={{ color: '#c2c2c2' }}>인스타그램</p>
      </div>
    );

  // 전화걸기
  const openLink = () => {
    const telNumber = props.phoneNumber;
    const pageUrl = 'tel:' + telNumber;
    document.location.href = pageUrl;
  };

  return (
    <div className='details__Header'>
      <div className='details__Header__Container'>
        <div className='details__shortDesc'>
          <h4>{props.shortDescription}</h4>
        </div>
        <div className='details__name'>
          <h3>{props.name}</h3>
          {verfiedStore}
        </div>
        <div className='branch'>
          <p>{props.branch}</p>
        </div>
        <div className='details__tag'>
          {props.tags.map((tag) => {
            return <span key={tag}>#{tag} </span>;
          })}
        </div>
      </div>
      <div className='details__Header__Call' type='button' onClick={openLink}>
        <FiPhoneCall
          style={{
            width: '1.65rem',
            marginRight: '0.2rem',
            marginTop: '0.3rem',
            color: '#3C3C3C',
          }}
        />
        <p>통화하기</p>
      </div>
      <div className='details__Header__SNS'>
        {instagramAcc}
        <div
          className='details__Header__Naver'
          onClick={() => window.open(props.naverLink, '_blank')}
        >
          <p>네이버</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
