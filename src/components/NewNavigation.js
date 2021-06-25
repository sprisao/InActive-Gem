import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import './NewNavigation.css';

const NewNavigation = () => {
  return (
    <section className='new__Navigation'>
      <div className='Navigation__Container'>
        <div className='FirstGrid__Wrap'>
          <div className='FirstGrid__Item'>
            <div className='Navigation__Item__Header'>
              <h1>맛집</h1>
              <FiChevronRight
                style={{
                  fontSize: '1.5rem',
                  strokeWidth: '3px',
                  color: '#c6c6c6',
                  marginLeft: '0.3rem',
                }}
              />
            </div>
          </div>
          <div className='FirstGrid__Item'>
            <div className='Navigation__Item__Header'>
              <h1>카페</h1>
              <FiChevronRight
                style={{
                  fontSize: '1.5rem',
                  strokeWidth: '3px',
                  color: '#c6c6c6',
                  marginLeft: '0.3rem',
                }}
              />
            </div>
          </div>
        </div>
        <div className='SecondGrid__Wrap'>
          <div className='SecondGrid__Item'>
            <div className='Navigation__Item__Header'>
              <h1>가볼만한 곳</h1>
              <FiChevronRight
                style={{
                  fontSize: '1.5rem',
                  strokeWidth: '3px',
                  color: '#c6c6c6',
                  marginLeft: '0.3rem',
                }}
              />
            </div>
          </div>
        </div>
        <div className='ThirdGrid__Wrap'>
          <div className='ThirdGrid__Item'>
            <h2>호프・주점</h2>
          </div>
          <div className='ThirdGrid__Item'>
            <h2>운동・헬스</h2>
          </div>
          <div className='ThirdGrid__Item'>
            <h2>미용・뷰티</h2>
          </div>
          <div className='ThirdGrid__Item'>
            <h2>스튜디오</h2>
          </div>
          <div className='ThirdGrid__Item'>
            <h2>게임・노래</h2>
          </div>
          <div className='ThirdGrid__Item'>
            <h2>꽃</h2>
          </div>
          <div className='ThirdGrid__Item'>
            <h2>키즈</h2>
          </div>
          <div className='ThirdGrid__Item'>
            <h2>캠핑장</h2>
          </div>
        </div>
        <div className='FourthGrid__Wrap'>
          <div className='FourthGrid__Item'>
            <div className='Navigation__Item__Header'>
              <h2>원주혁신도시</h2>
              <FiChevronRight
                style={{
                  fontSize: '1.5rem',
                  strokeWidth: '3px',
                  color: '#c6c6c6',
                  marginLeft: '0.3rem',
                }}
              />
            </div>
          </div>
          <div className='FourthGrid__Item'>
            <div className='Navigation__Item__Header'>
              <h2>원주기업도시</h2>
              <FiChevronRight
                style={{
                  fontSize: '1.5rem',
                  strokeWidth: '3px',
                  color: '#c6c6c6',
                  marginLeft: '0.3rem',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewNavigation;
