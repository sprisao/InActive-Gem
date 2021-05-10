import React from 'react';
import {
  FiInstagram,
  FiClock,
  FiXCircle,
  FiMapPin,
  FiChevronDown,
  FiPhoneOutgoing,
  FiMinusCircle,
} from 'react-icons/fi';

import './Information.css';

// 문제 : 특정 데이터 값이 없을경우 아이콘도 함께 표시되지 않았으면 좋겠다
// 특정 필드에 데이터가 있을 경우에만 그 필드가 속한 'div'가 표시되면 좋겠다.

const Information = (props) => {
  console.log(props.breakDays);
  return (
    <div className='details__Information'>
      <div className='businessHours'>
        <FiClock style={{ strokeWidth: '1px' }} className='details__icon' />
        <p>
          운영시간 {props.openHour} ~ {props.closeHour}
        </p>
      </div>
      <div className='breakTime'>
        <FiMinusCircle
          style={{ strokeWidth: '1px' }}
          className='details__icon'
        />
        <p>
          휴게시간 {props.breaktimeStart} ~ {props.breaktimeEnd}
        </p>
      </div>
      <div className='breakDays'>
        <FiXCircle style={{ strokeWidth: '1px' }} className='details__icon' />
        <p>
          {props.breakDays} <span style={{ color: 'black' }}>휴무</span>
        </p>
      </div>
      <div className='location'>
        <FiMapPin style={{ strokeWidth: '1px' }} className='details__icon' />
        <p>{props.eupmyeondongRi}</p>
        <FiChevronDown />
      </div>
      <div className='phoneNumber'>
        <FiPhoneOutgoing
          style={{ strokeWidth: '1px' }}
          className='details__icon'
        />
        <p>{props.phoneNumber}</p>
      </div>
    </div>
  );
};

export default Information;
