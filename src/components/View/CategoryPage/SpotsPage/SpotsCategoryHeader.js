import React, { useState, useRef } from 'react';

import { useDetectOutsideClick } from '../CategoryPageComponent/useDetectOutsideClick';

import { Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronDown } from 'react-icons/fi';

const SpotsCategoryHeader = ({ spotsCategory, filteredLocation }) => {
  const dropdownRef = useRef(null);
  const [isActive, setisActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setisActive(!isActive);
  const [locationCategory, setLocationCategory] = useState('전체');

  return (
    <>
      <div className='Category__Header__Wrapper'>
        <div className='Category__Header'>
          <Link to={`/sightseeing`}>
            <button className='Category__Backward'>
              <FiChevronLeft style={{ fontSize: '1.8rem', color: '#000' }} />
            </button>
          </Link>
          <div className='Category__Title'>
            <h3>가볼만한 곳</h3>
          </div>
          <div style={{ width: '7rem' }}></div>
          {/* <div className='Category__Menu__Container'>
            <div onClick={onClick} className='menu-trigger'>
              <span>{locationCategory}</span>
              <FiChevronDown
                style={{ fontSize: '1rem', marginRight: '-0.25rem' }}
              />
            </div>
            <nav
              ref={dropdownRef}
              className={`dropdownMenu ${isActive ? 'active' : 'inactive'}`}
            >
              <ul>
                <li>
                  <Link to={`/sightseeing/${spotsCategory}/전체`}>
                    <button
                      onClick={() => {
                        setLocationCategory('전체');
                        setisActive(!isActive);
                      }}
                    >
                      전체
                    </button>
                  </Link>
                </li>
                {filteredLocation.map((location) => (
                  <li key={location}>
                    <Link to={`/sightseeing/${spotsCategory}/${location}`}>
                      <button
                        onClick={() => {
                          setLocationCategory(location);
                          setisActive(!isActive);
                        }}
                      >
                        {location}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SpotsCategoryHeader;
