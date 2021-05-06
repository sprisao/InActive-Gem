import React from 'react';
import { useGlobalContext } from '../../components/storeContext';
import GridCard from './GridCard';
import './Grid.css';

const Grid = (props) => {
  const { stores, loading } = useGlobalContext();

  return (
    <section className='grid'>
      {stores.map((store) => {
        if (store.fields.categoryTitle === props.filter) {
          return <GridCard key={store.id} store={store}></GridCard>;
        }
      })}
    </section>
  );
};

export default Grid;
