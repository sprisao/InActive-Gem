import React from 'react';

import { FiHome } from 'react-icons/fi';
import {
  BsBookmark,
  BsBookmarkFill,
  BsLightningFill,
  BsFillHouseDoorFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './BottomNavigation.css';

const BottomNavigation = (props) => {
  var IorA = navigator.userAgent.toLowerCase();

  return (
    <div className='BottomNavigation'>
      <div
        className={`BottomNavi-wrapper ${
          IorA.indexOf('android') !== -1
            ? 'Android'
            : IorA.indexOf('iphone') !== -1
            ? 'iPhone '
            : 'Web'
        }
        
        `}
      >
        <Link
          to='/'
          className={`BottomNavi-wrapper__ButtonContainer 
        ${props.activatedButton === 'home' ? 'active' : null}
        
        `}
        >
          <button className='BottomNavi-Button'>
            <div className='Button-Wrapper'>
              <BsFillHouseDoorFill
                style={{
                  fontSize: '1.75rem',
                }}
                className='BottomNavi-ButtonIcon'
              />
              <span>홈</span>
            </div>
          </button>
        </Link>
        <Link
          to='/events'
          className={`BottomNavi-wrapper__ButtonContainer activatedButton
          ${props.activatedButton === 'events' ? 'active' : null}`}
        >
          <button className='BottomNavi-Button'>
            <div className='Button-Wrapper'>
              <BsLightningFill
                style={{
                  fontSize: '1.85rem',
                }}
                className='BottomNavi-ButtonIcon-Event'
              />
              <span>이벤트&할인</span>
            </div>
          </button>
        </Link>
        <Link
          to='/bookmarks'
          className={`BottomNavi-wrapper__ButtonContainer activatedButton
        ${props.activatedButton === 'bookmarks' ? 'active' : null}`}
        >
          <button className='BottomNavi-Button'>
            <div className='Button-Wrapper'>
              <BsBookmarkFill
                style={{
                  fontSize: '1.85rem',
                }}
                className='BottomNavi-ButtonIcon-Bookmarks'
              />
              <span>찜</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
