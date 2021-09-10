import React from 'react';

import { FiHome } from 'react-icons/fi';
import { BsFillLightningFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './BottomNavigation.css';

const BottomNavigation = (props) => {
  return (
    <div className='BottomNavigation'>
      <div className='BottomNavi-wrapper'>
        <Link
          to='/'
          className={`BottomNavi-wrapper__ButtonContainer 
        ${props.activatedButton === 'home' ? 'active' : null}
        
        `}
        >
          <button className='BottomNavi-Button'>
            <FiHome
              style={{
                fontSize: '1.35rem',
                marginRight: '0.75rem',
                marginBottom: '0.15rem',
              }}
              className='BottomNavi-ButtonIcon'
            />
            홈
          </button>
        </Link>
        <Link
          to='/events'
          className={`BottomNavi-wrapper__ButtonContainer activatedButton
        ${props.activatedButton === 'events' ? 'active' : null}`}
        >
          <button className='BottomNavi-Button'>
            <BsFillLightningFill
              style={{
                fontSize: '1.35rem',
                marginRight: '0.65rem',
                marginBottom: '0.1rem',
              }}
              className='BottomNavi-ButtonIcon-Event'
            />
            이벤트&할인
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
