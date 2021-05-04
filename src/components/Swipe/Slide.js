import React from 'react';
import { useGlobalContext } from '../../components/storeContext';
import FeaturedCard from './FeaturedCard';
import './Slide.css';

const Slide = (props) => {
  const { stores, loading } = useGlobalContext();

  if (loading) {
    return <div>로딩중</div>;
  }
  return (
    <div className='slide'>
      {stores.map((store) => {
        if (store.categoryTitle === props.filter) {
          return <FeaturedCard key={store.id} {...store}></FeaturedCard>;
        }
        console.log(store);
      })}
    </div>
  );
};

export default Slide;
