import React from 'react';
import { data } from '../datafiles/stores';
import GridCard from './GridCard';
import './Grid.css';

const Grid = (props) => {
  return (
    <section className='grid'>
      {data.map((store, index) => {
        if (store.category === props.filter) {
          return <GridCard key={store.id} {...store}></GridCard>;
        }
      })}
    </section>
  );
};

export default Grid;
