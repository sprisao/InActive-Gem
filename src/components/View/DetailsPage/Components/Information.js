import React, { useState, useEffect } from 'react';
import {
  FiClock,
  FiXCircle,
  FiMapPin,
  FiPhoneOutgoing,
  FiCopy,
  FiChevronDown,
  FiPhoneCall,
  FiInstagram,
  FiLogOut,
  FiLink2,
} from 'react-icons/fi';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import Separator from '../../../Separator';

import Modal from './Modal';

import './Information.css';

const url = 'https://www.instagram.com/';

const Information = (props) => {
  const [copied, setCopied] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(true);
  };

  useEffect(() => {
    if (isShowing) {
      const notiTimer = setTimeout(() => {
        setIsShowing(false);
      }, 1400);
      return () => clearTimeout(notiTimer);
    }
  }, [isShowing]);

  // 브레이크 타임 필터링

  let businessHours;
  if (props.breaktimeStart) {
    businessHours = (
      <>
        <div className='businessHours'>
          <FiClock
            style={{ strokeWidth: '1px', color: '#a8a8a8' }}
            className='details__icon'
          />
          <p>
            {props.openHour} ~ {props.closeHour} 휴게시간 {props.breaktimeStart}{' '}
            ~{props.breaktimeEnd}
          </p>
        </div>
        <hr />
      </>
    );
  } else {
    businessHours = (
      <>
        <div className='businessHours'>
          <FiClock
            style={{ strokeWidth: '1px', color: '#a8a8a8' }}
            className='details__icon'
          />
          <p>
            {props.openHour} ~ {props.closeHour}
          </p>
        </div>
        <hr />
      </>
    );
  }

  // 휴무 필터링
  let breakDays;

  if (props.breakDays) {
    if (props.breakDays[0] === '연중무휴') {
      breakDays = (
        <>
          <div className='breakDays'>
            <FiXCircle
              style={{ strokeWidth: '1px', color: '#a8a8a8' }}
              className='details__icon'
            />
            <p>{props.breakDays}</p>
          </div>
          <hr />
        </>
      );
    }
    if (props.breakDays[0] !== '연중무휴' && props.breakDays.length === 1) {
      breakDays = (
        <>
          <div className='breakDays'>
            <FiXCircle
              style={{ strokeWidth: '1px', color: '#a8a8a8' }}
              className='details__icon'
            />
            <p>
              {props.breakDays} <span style={{ color: 'black' }}>휴무</span>
            </p>
          </div>
          <hr />
        </>
      );
    }
    if (props.breakDays.length >= 2) {
      breakDays = (
        <>
          <div className='breakDays'>
            <FiXCircle
              style={{ strokeWidth: '1px', color: '#a8a8a8' }}
              className='details__icon'
            />
            {props.breakDays.map((breakDay) => (
              <p key={breakDay.id}>{breakDay}&nbsp;</p>
            ))}
            <span style={{ color: 'black' }}>휴무</span>
          </div>
          <hr />
        </>
      );
    }
  }

  // 전화걸기
  const openLink = () => {
    const telNumber = props.phoneNumber;
    const pageUrl = 'tel:' + telNumber;
    document.location.href = pageUrl;
  };

  // 전화번호 필터링

  let telephoneNumber;
  if (props.phoneNumber) {
    telephoneNumber = (
      <div className='phoneNumber'>
        <FiPhoneOutgoing
          style={{ strokeWidth: '1px', color: '#a8a8a8' }}
          className='details__icon'
        />
        <p>{props.phoneNumber}</p>

        <CopyToClipboard
          text={props.phoneNumber}
          onCopy={() => setCopied(true)}
        >
          <button type='button' onClick={openModal}>
            <div className='copyBtn__container'>
              <FiCopy style={{ fontSize: '1rem' }} />
              <p>복사</p>
            </div>

            <div>{isShowing && <Modal />}</div>
          </button>
        </CopyToClipboard>

        <button type='button' onClick={openLink}>
          <div className='copyBtn__container'>
            <FiPhoneCall style={{ fontSize: '1rem' }} />
            <p>통화하기</p>
          </div>
        </button>
      </div>
    );
  }

  // 인스타그램 필터링

  let instagram;
  if (props.instagramAccount) {
    instagram = (
      <>
        <hr />
        <div className='phoneNumber'>
          <FiInstagram
            style={{ strokeWidth: '1px', color: '#a8a8a8' }}
            className='details__icon'
          />
          <p
            style={{ cursor: 'pointer' }}
            onClick={() => window.open(url + props.instagramAccount, '_parent')}
          >
            @{props.instagramAccount}
          </p>

          <button
            type='button'
            onClick={() => window.open(url + props.instagramAccount, '_parent')}
          >
            <div className='copyBtn__container'>
              <FiLogOut style={{ fontSize: '1rem' }} />
              <p>보기</p>
            </div>
          </button>
        </div>
      </>
    );
  }
  return (
    <div className='details__Information'>
      <div className='details__section__header'>
        <h2>가게정보</h2>
        <FiChevronDown style={{ fontSize: '1.5rem' }} />
      </div>
      <div className='details__Information__wrapper'>
        {businessHours}
        {breakDays}
        <div className='location'>
          <FiMapPin
            style={{ strokeWidth: '1px', color: '#a8a8a8' }}
            className='details__icon'
          />
          <div className='location__fullAddress'>
            <p>{props.fullAddress}</p>
          </div>
          <CopyToClipboard
            text={props.fullAddress}
            onCopy={() => setCopied(true)}
          >
            <button className='btn_container' type='button' onClick={openModal}>
              <div className='copyBtn__container'>
                <FiCopy style={{ fontSize: '1rem' }} />
                <p>복사</p>
              </div>

              <div>{isShowing && <Modal />}</div>
            </button>
          </CopyToClipboard>
        </div>
        <hr />
        {telephoneNumber}
        {instagram}
        <hr />
        <div className='location'>
          <FiLink2
            style={{ strokeWidth: '1px', color: '#a8a8a8' }}
            className='details__icon'
          />
          <div className='location__fullAddress'>
            <p
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(props.naverLink, '_blank')}
            >
              {props.naverLink}
            </p>
          </div>
          <button
            type='button'
            onClick={() => window.open(props.naverLink, '_blank')}
          >
            <div className='copyBtn__container'>
              <FiLogOut style={{ fontSize: '1rem' }} />
              <p>보기</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
