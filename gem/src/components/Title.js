import React from 'react';
import './Title.css';

const Title = ({ title, emoji, desc }) => {
  return (
    <div className='section__title'>
      <h1>
        <span className='emoji'>{emoji}</span>&nbsp;{title}
      </h1>
      <p>{desc}</p>
    </div>
  );
};

export default Title;
