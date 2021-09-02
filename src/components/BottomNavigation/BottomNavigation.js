import React from 'react';

import { FiHome } from 'react-icons/fi';
import { BsFillLightningFill } from 'react-icons/bs';

import './BottomNavigation.css';

const BottomNavigation = (props) => {
  const sendViewStatus = (params, e) => {
    props.getViewStatus(params);
  };

  return (
    <div className='BottomNavigation'>
      <div className='BottomNavi-wrapper'>
        <button
          className={`BottomNavi-wrapper__ButtonContainer ${
            props.activatedButton === 'home' ? 'active' : null
          }`}
          onClick={(e) => {
            sendViewStatus('home', e);
          }}
        >
          <FiHome
            style={{
              fontSize: '1.2rem',
              marginRight: '0.55rem',
              marginBottom: '0.15rem',
            }}
            className='BottomNavi-ButtonIcon'
          />
          홈
        </button>
        <button
          className={`BottomNavi-wrapper__ButtonContainer ${
            props.activatedButton === 'events' ? 'active' : null
          }`}
          onClick={(e) => {
            sendViewStatus('events', e);
          }}
        >
          <BsFillLightningFill
            style={{
              fontSize: '1.2rem',
              marginRight: '0.55rem',
              marginBottom: '0.15rem',
            }}
            className='BottomNavi-ButtonIcon-Event'
          />
          이벤트&할인
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
