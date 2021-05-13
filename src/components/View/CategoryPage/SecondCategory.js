import React, { useState } from 'react';
import './SecondCategory.css';

const Tags = (props) => {
  let secondCategory;
  if (props.category === '음식점') {
    secondCategory = (
      <div className='SeondCategory__container'>
        <button className='SeondCategory__item'>🅰 전체</button>
        <button className='SeondCategory__item'>🍚 한식</button>
        <button className='SeondCategory__item'>🥟 분식</button>
        <button className='SeondCategory__item'>🍣 돈까스・회・일식 </button>
        <button className='SeondCategory__item'>🥗 샐러드 </button>
        {/* <button className='SeondCategory__item'>치킨</button> */}
        {/* <button className='SeondCategory__item'>피자</button> */}
        <button className='SeondCategory__item'>🍝 아시안・양식</button>
        <button className='SeondCategory__item'>🍜 중식</button>
        <button className='SeondCategory__item'>🥩 족발・보쌈・구이</button>
        <button className='SeondCategory__item'>🌙 야식</button>
        <button className='SeondCategory__item'>🍲 찜・탕・면</button>
        {/* <button className='SeondCategory__item'>도시락</button> */}
        <button className='SeondCategory__item'>🍔 햄버거</button>
      </div>
    );
  }
  if (props.category === '카페') {
    secondCategory = (
      <div className='SeondCategory__container'>
        <button className='SeondCategory__item'>🅰 전체</button>
        <button className='SeondCategory__item'>✨ 분위기 맛집 카페</button>
        <button className='SeondCategory__item'>👩🏻‍💻 작업하기 좋은 카페</button>
        <button className='SeondCategory__item'>⛰ 뷰 맛집 카페</button>
        <button className='SeondCategory__item'>🍰 디저트 맛집 카페</button>
        <button className='SeondCategory__item'>🥗 브런치 카페</button>
        <button className='SeondCategory__item'>📸 인스타 감성 카페</button>
      </div>
    );
  }
  return <section className='SeondCategory'>{secondCategory}</section>;
};

export default Tags;
