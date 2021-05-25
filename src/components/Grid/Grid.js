import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import GridCard from './GridCard';
import Loading from '../Loading';
import Leerpage from '../View/ErrorPage/LeerPage';
import './Grid.css';

const Grid = ({ filter }) => {
  const { stores, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  let leerfilter;
  if (filter === 'leer') {
    leerfilter = <Leerpage />;
  } else {
    leerfilter = (
      <section className='title'>
        <section className='grid'>
          {stores.map((store) => {
            if (store.firstCategory[0] === filter) {
              return (
                <GridCard
                  key={store.id}
                  store={store}
                  tags={store.tags}
                ></GridCard>
              );
            }
            if (store.secondCategory[0] === filter) {
              return (
                <GridCard
                  key={store.id}
                  store={store}
                  tags={store.tags}
                ></GridCard>
              );
            }
            if (store.eupmyeondongRi === filter) {
              console.log(store.eupmyeondongRi);
              return (
                <GridCard
                  key={store.id}
                  store={store}
                  tags={store.tags}
                ></GridCard>
              );
            }
          })}
        </section>
      </section>
    );
  }

  return <div>{leerfilter}</div>;
};

export default Grid;
