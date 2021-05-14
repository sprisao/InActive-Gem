import React, { useState } from 'react';
import './SecondCategory.css';

const Tags = (props) => {
  const sendSecondCategory = (text) => {
    props.getSecondCategory(text);
  };

  let secondCategory;
  if (props.category === '음식점') {
    secondCategory = (
      <div className='SeondCategory__container'>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('all')}
        >
          🅰 전체
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('한식')}
        >
          🍚 한식
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('분식')}
        >
          🥟 분식
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('돈까스・회・일식')}
        >
          🍣 돈까스・회・일식
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('샐러드')}
        >
          🥗 샐러드
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('아시안・양식')}
        >
          🍝 아시안・양식
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('중식')}
        >
          🍜 중식
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('족발・보쌈・구이')}
        >
          🥩 족발・보쌈・구이
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('찜・탕')}
        >
          🍲 찜・탕
        </button>
        {/* <button className='SeondCategory__item'>치킨</button> */}
        {/* <button className='SeondCategory__item'>피자</button> */}
        {/* <button className='SeondCategory__item'>🌙 야식</button> */}
        {/* <button className='SeondCategory__item'>도시락</button> */}
        {/* <button className='SeondCategory__item'>🍔 햄버거</button> */}
      </div>
    );
  }
  if (props.category === '카페') {
    secondCategory = (
      <div className='SeondCategory__container'>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('all')}
        >
          🅰 전체
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('분위기')}
        >
          ✨ 분위기
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('작업하기 좋은')}
        >
          👩🏻‍💻 작업하기 좋은
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('디저트 맛집')}
        >
          🍰 디저트 맛집
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('브런치')}
        >
          🥗 브런치
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('인스타 감성')}
        >
          📸 인스타 감성
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('자연')}
        >
          🌳 자연
        </button>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('뷰 맛집')}
        >
          ⛰ 뷰 맛집
        </button>
      </div>
    );
  }
  return <section className='SeondCategory'>{secondCategory}</section>;
};

export default Tags;
