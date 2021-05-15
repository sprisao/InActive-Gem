import React from 'react';
import { useGlobalContext } from '../../../storeContext';
import DetailGridCard from './DetailGridCard';
import './DetailGrid.css';

const DetailGrid = (props) => {
  const { stores, loading } = useGlobalContext();
  return (
    <section className='detail__grid'>
      {stores.map((store) => {
        if (store.fields.secondCategory === props.filter) {
          return (
            <DetailGridCard
              key={store.id}
              store={store}
              tags={store.fields.tags}
            ></DetailGridCard>
          );
        }
      })}
    </section>
  );
};

export default DetailGrid;
