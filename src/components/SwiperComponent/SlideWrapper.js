import React from 'react';
import { useGlobalContext } from '../context';
import SlideCard from './SlideCard';
import Loading from '../Loading';
import './SlideWrapper.css';

const SlideWrapper = (props) => {
  const { stores, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <section className='title'>
      <div className='SlideWrapper'>
        {stores.map((store) => {
          if (props.condition === props.filter) {
            return <SlideCard key={store.id} store={store}></SlideCard>;
          }
        })}
      </div>
    </section>
  );
};

export default SlideWrapper;
