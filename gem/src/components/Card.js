import React from 'react';
import './Card.css';

const Card = ({ img, title, category, location, desc }) => {
  return (
    <article className='card'>
      <img src={img} alt='' />
      <h4>{title}</h4>
      <span>{location}</span>
      <p>{desc}</p>
    </article>
  );
};

export default Card;
