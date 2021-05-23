import React from 'react';
import { useGlobalContext } from '../../../context';
import DetailGridCard from './DetailGridCard';
import './DetailGrid.css';

const DetailGrid = (props) => {
  const { stores, loading } = useGlobalContext();
  return (
    <section className='detail__grid'>
      {stores.map((store) => {
        if (store.secondCategory[0] === props.filter) {
          return (
            <DetailGridCard
              key={store.id}
              store={store}
              tags={store.tags}
            ></DetailGridCard>
          );
        }
      })}
    </section>
  );
};

export default DetailGrid;
