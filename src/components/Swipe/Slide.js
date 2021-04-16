import React from 'react';
import { data } from '../../datafiles/stores';
import FeaturedCard from './FeaturedCard';
import './Slide.css';

const Slide = (props) => {
  return (
    <div className='slide'>
      {data.map((store, index) => {
        if (store.ctgry === props.filter) {
          return <FeaturedCard key={store.id} {...store}></FeaturedCard>;
        }
      })}
    </div>
  );
};

export default Slide;
