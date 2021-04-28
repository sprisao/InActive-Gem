import React from 'react';
import { data } from '../../../../datafiles/stores';
import DetailGridCard from './DetailGridCard';
import './DetailGrid.css';

const DetailGrid = (props) => {
  return (
    <section className='detail__grid'>
      {data.map((store, index) => {
        if (store.ctgry === props.filter) {
          return <DetailGridCard key={store.id} {...store}></DetailGridCard>;
        }
      })}
    </section>
  );
};

export default DetailGrid;
