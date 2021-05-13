import React from 'react';
import { useGlobalContext } from '../../components/storeContext';
import GridCard from './GridCard';
import Loading from '../Loading';
import './Grid.css';

const Grid = (props) => {
  const { stores, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <section className='grid'>
      {stores.map((store) => {
        if (store.fields.categoryTitle === props.filter) {
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
