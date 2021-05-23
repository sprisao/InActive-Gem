import React from 'react';
import { useGlobalContext } from '../context';
import FeaturedCard from './FeaturedCard';
import './Slide.css';

const Slide = (props) => {
  const { stores, loading } = useGlobalContext();

  // if (loading) {
  //   return <div>로딩중</div>;
  // }
  return (
    <div className='slide'>
      {stores.map((store) => {
        if (store.firstCategory[0] === props.filter) {
          return <FeaturedCard key={store.id} store={store}></FeaturedCard>;
        }
      })}
    </div>
  );
};

export default Slide;
