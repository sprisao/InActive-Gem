import React from 'react';
import {
  FiClock,
  FiXCircle,
  FiMapPin,
  FiChevronDown,
  FiPhoneOutgoing,
} from 'react-icons/fi';

import './Information.css';

const Information = (props) => {
  return (
    <div className='details__Information'>
      <div className='businessHours'>
        <FiClock style={{ strokeWidth: '1px' }} className='details__icon' />
        <p>
          {props.businessHours} 휴게시간 {props.breakHours}
        </p>
      </div>
      <div className='breakDays'>
        <FiXCircle style={{ strokeWidth: '1px' }} className='details__icon' />
        <p>{props.breakDays} 휴무</p>
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
