import React, { useState } from 'react';
import './SecondCategory.css';

const Tags = () => {
  return (
    <section className='SeondCategory'>
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
        <button className='SeondCategory__item'>🥩 족발・보쌈</button>
        <button className='SeondCategory__item'>🌙 야식</button>
        <button className='SeondCategory__item'>🍲 찜・탕</button>
        {/* <button className='SeondCategory__item'>도시락</button> */}
        <button className='SeondCategory__item'>🍔 햄버거</button>
      </div>
    </section>
  );
};

export default Tags;
