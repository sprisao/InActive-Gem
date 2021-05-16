import React from 'react';
import { useGlobalContext } from '../../components/storeContext';
import GridCard from './GridCard';
import Loading from '../Loading';
import Leerpage from '../View/ErrorPage/LeerPage';
import './Grid.css';

const Grid = ({ filter }) => {
  const { stores, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  // let leerfilter2;
  // if (store.fields.categoryTitle === filter) {
  //   leerfilter2 = ( )
  // }

  let leerfilter;
  if (filter === 'leer') {
    leerfilter = <Leerpage />;
  } else {
    leerfilter = (
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
          if (store.fields.eupmyeondongRi === filter) {
            console.log(store.fields.eupmyeondongRi);
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
  }

  return <div>{leerfilter}</div>;
};

export default Grid;
