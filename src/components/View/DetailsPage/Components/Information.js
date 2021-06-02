import React, { useState } from 'react';
import {
  FiInstagram,
  FiClock,
  FiXCircle,
  FiMapPin,
  FiChevronDown,
  FiPhoneOutgoing,
  FiMinusCircle,
  FiCopy,
} from 'react-icons/fi';

import ReactDOM from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './Information.css';

// 문제 : 특정 데이터 값이 없을경우 아이콘도 함께 표시되지 않았으면 좋겠다
// 특정 필드에 데이터가 있을 경우에만 그 필드가 속한 'div'가 표시되면 좋겠다.

const Information = (props) => {
  const [copied, setCopied] = useState(false);
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
    <div className='businessHours'>
      <FiClock
        style={{ strokeWidth: '1px', color: '#a8a8a8' }}
        className='details__icon'
      />
      <p>
        {props.openHour} ~ {props.closeHour}
      </p>
    </div>;
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
    if (props.breakDays[0] !== '연중무휴' && props.breakDays.length !== 1) {
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
              <p>{breakDay}&nbsp;</p>
            ))}
            <span style={{ color: 'black' }}>휴무</span>
          </div>
          <hr />
        </>
      );
    }
  }

  return (
    <div className='details__Information'>
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
          <div className='copyBtn__container'>
            <FiCopy style={{ fontSize: '1rem' }} />
            <p>복사</p>
          </div>
        </CopyToClipboard>
        {/* {copied ? <span style={{ color: 'red' }}>Copied.</span> : null} */}
      </div>
      <hr />
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
          <div className='copyBtn__container'>
            <FiCopy style={{ fontSize: '1rem' }} />
            <p>복사</p>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Information;
