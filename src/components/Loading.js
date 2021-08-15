import React from 'react';

import './Loading.css';
const Loading = () => {
  return (
    <section className='loading'>
      <div className='loading__contents'>
        <img
          src='https://res.cloudinary.com/diimwnnmj/image/upload/v1629001126/KakaoTalk_Photo_2021-08-15-13-17-13_eluzaj.gif'
          alt='Loading...'
        />
      </div>
    </section>
  );
};

export default Loading;
