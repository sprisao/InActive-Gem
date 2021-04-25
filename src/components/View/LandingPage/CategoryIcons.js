import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIcons = ({ id, category, name, image, active, display }) => {
  return (
    <Link to={`/category/${id}`}>
      <div key={id} className='navigation__btn'>
        <img src={image} alt={name} />
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default CategoryIcons;
