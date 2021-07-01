import React, { useState, useRef } from 'react';

import { useDetectOutsideClick } from './useDetectOutsideClick';
import { useGlobalContext } from '../../../context';

import { Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronDown } from 'react-icons/fi';

const CategoryHeader = ({ filterLocations, category }) => {
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
          <Link to={`/category/홈`}>
            <button className='Category__Backward'>
              <FiChevronLeft style={{ fontSize: '1.8rem' }} />
            </button>
          </Link>
          <Link to={`/category/맛집`}>
            <div className='Category__Title'>
              <h3>{category}</h3>
            </div>
          </Link>
          <div className='Category__Menu__Container'>
            <button onClick={onClick} className='menu-trigger'>
              <div className='Category__Menu__Trigger__SpanContainer'>
                <span>{locationCategory}</span>
              </div>
              <FiChevronDown
                style={{ fontSize: '1rem', marginRight: '-0.25rem' }}
              />
            </button>
            <nav
              ref={dropdownRef}
              className={`dropdownMenu ${isActive ? 'active' : 'inactive'}`}
            >
              <ul>
                <li>
                  <button
                    onClick={() => {
                      setLocationCategory('전체');
                      filterLocations('전체');
                      setisActive(!isActive);
                    }}
                  >
                    전체
                  </button>
                </li>
                {locationCategories.map((location) => (
                  <li key={location.id}>
                    <button
                      onClick={() => {
                        setLocationCategory(location.location);
                        setisActive(!isActive);
                        filterLocations(location.location);
                      }}
                    >
                      {location.location}
                    </button>
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
