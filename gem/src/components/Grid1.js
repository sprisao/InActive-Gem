import React from 'react';

const Grid1 = ({ stores }) => {
  return (
    <div className='section__cards'>
      <div className='cards__grid__food'>
        {stores.map((storeItem) => {
          const { id, title, category, img, desc, location } = storeItem;
          return (
            <div className='cards__grid__card'>
              <div
                className='thumb16'
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              <article>
                <h3>{title}</h3>
                <p>{location}</p>
                <p>{desc}</p>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid1;
