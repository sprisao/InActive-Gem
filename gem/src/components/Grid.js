import React from 'react';
import { data } from './stores';
import Card from './Card';
import './Grid.css';

const Grid = (props) => {
  return (
    <section className='grid'>
      {data.map((store, index) => {
        if (store.category === props.filter) {
          return <Card key={store.id} {...store}></Card>;
        }
      })}
    </section>
  );
};

export default Grid;
