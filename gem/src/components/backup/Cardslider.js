import React from 'react';

const Cardslider = ({ stores }) => {
  return (
    <div className='section__cards'>
      <div className='cards__swiper__new'>
        {stores.map((storeItem) => {
          const { id, title, category, img, desc, location } = storeItem;
          return (
            <div
              className='cards__swiper__card new'
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <div key={id} className='article'>
                <article>
                  <p>{desc}</p>
                  <h1>{title}</h1>
                  <span>{location}</span>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cardslider;
