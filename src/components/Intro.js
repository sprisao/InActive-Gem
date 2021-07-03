import React from 'react';

import './Intro.css';

const Intro = () => {
  return (
    <section className='Intro'>
      <div className='intro-logo__container'>
        <img
          src='https://res.cloudinary.com/diimwnnmj/image/upload/v1625298743/Intro-logo_dlyrtw.png'
          alt='Intro'
          className='intro-logo'
        />
      </div>
    </section>
  );
};

export default Intro;
