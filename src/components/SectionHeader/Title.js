import React from 'react';
import './Title.css';

const Title = ({ title, emoji, desc }) => {
  return (
    <section className='title'>
      <div className='section__title'>
        <h1>{title}</h1>
        <h4>{desc}</h4>
      </div>
    </section>
  );
};

export default Title;
