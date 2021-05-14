import React from 'react';
import { useGlobalContext } from '../../components/storeContext';
import GridCard from './GridCard';
import Loading from '../Loading';
import './Grid.css';

const Grid = ({ filter }) => {
  const { stores, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <section className='grid'>
      {stores.map((store) => {
        if (store.fields.categoryTitle === filter) {
          return (
            <GridCard
              key={store.id}
              store={store}
              tags={store.fields.tags}
            ></GridCard>
          );
        }
        if (store.fields.secondCategory === filter) {
          console.log(store.fields.secondCategory);
          return (
            <GridCard
              key={store.id}
              store={store}
              tags={store.fields.tags}
            ></GridCard>
          );
        }
      })}
    </section>
  );
};

export default Grid;
