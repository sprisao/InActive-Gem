import React from 'react';
import './GridCard.css';

const GridCard = ({ img, title, category, location, desc }) => {
  return (
    <article className='gridCard'>
      <img src={img} alt='' />
      <h4>{title}</h4>
      <span>{location}</span>
      <p>{desc}</p>
    </article>
  );
};

export default GridCard;
