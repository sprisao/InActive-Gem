import React from 'react';

import './RecommendPage.css';

const RecommendPage = (props) => {
  return (
    <section className='RecommendPage'>
      <div className='Recommend--ArticleBox'>
        <h1>Coming Soon!</h1>
        <p>
          <span
            style={{
              background:
                'linear-gradient(to top, #FFE400 50%, transparent 50% )',
            }}
          >
            옆으로 넘겨서
          </span>{' '}
          <br />
          카테고리별로 다양한{' '}
          <span style={{ backgroundColor: '#f21d73', color: '#fff' }}>
            {props.firstCategory}
          </span>{' '}
          들을 먼저 살펴보세요!
        </p>
        <img
          src='https://cdn-icons-png.flaticon.com/512/617/617907.png'
          alt='swipe'
        />
      </div>
    </section>
  );
};

export default RecommendPage;
