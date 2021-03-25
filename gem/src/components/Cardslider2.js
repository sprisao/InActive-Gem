import React from 'react';

const Cardslider2 = ({ stores }) => {
  return (
    <div className='cards__swiper__hot'>
      {stores.map((storeItem) => {
        const { id, title, category, img, desc, location } = storeItem;
        return (
          <div key={id} className='cards__swiper__card hot'>
            <img src={img} className='store_img' alt={title} />
            <h3>{title}</h3>
            <span>{location}</span>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cardslider2;
