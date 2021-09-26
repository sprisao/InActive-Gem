import React from 'react';

import './RecommendPage.css';

const RecommendPage = () => {
  return (
    <section className='RecommendPage'>
      <div className='Recommend--ArticleBox'>
        <h1>Coming Soon!</h1>
        <p>옆으로 넘겨 다양한 맛집들을 먼저 만나보세요!</p>
        <img
          src='https://cdn-icons-png.flaticon.com/512/617/617907.png'
          alt='swipe'
        />
      </div>
    </section>
  );
};

export default RecommendPage;
