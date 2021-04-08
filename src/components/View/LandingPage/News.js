import React from 'react';
import './News.css';

const News = () => {
  return (
    <section className='news'>
      <div className='news__container'>
        <div className='news__header'>원주소식 ></div>
        <div className='news__title'>
          원주시, 지역상생 우수 공공기관 및 우수기업에 감사패..
        </div>
        <div className='news__more'>
          <span>더 보기</span>
        </div>
      </div>
    </section>
  );
};

export default News;
