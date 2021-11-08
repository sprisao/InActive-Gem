import React, { useState, useRef } from 'react';

import { useDetectOutsideClick } from './useDetectOutsideClick';
import { useGlobalContext } from '../../../context';

import { Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronDown } from 'react-icons/fi';

import './CategoryHeader.css';

const CategoryHeader = ({ category, secondCategory, currentLocation }) => {
  const { locationCategories } = useGlobalContext();

  // 드롭다운 메뉴
  const dropdownRef = useRef(null);
  const [isActive, setisActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setisActive(!isActive);
  const [locationCategory, setLocationCategory] = useState('전체');

  return (
    <>
      <div className='Category__Header__Wrapper'>
        <div className='Category__Header'>
          <Link to={`/select/${category}`}>
            <button className='Category__Backward'>
              <FiChevronLeft style={{ fontSize: '1.8rem', color: '#000' }} />
            </button>
          </Link>
          <div className='Category__Title'>
            <h3>{category}</h3>
          </div>
          <div className='Category__Menu__Container'>
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
                  <Link to={`/category/${category}/전체/${secondCategory}`}>
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
                {locationCategories.map((location) => (
                  <li key={location.id}>
                    <Link
                      to={`/category/${category}/${location.location}/${secondCategory}`}
                    >
                      <button
                        onClick={() => {
                          setLocationCategory(location.location);
                          setisActive(!isActive);
                        }}
                      >
                        {location.location}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHeader;
