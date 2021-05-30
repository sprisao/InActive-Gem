import React from 'react';
import GridCard from '../../Grid/GridCard';
import '../../Grid/Grid.css';

const Grid = ({ filter }) => {
  return (
    <section className='title'>
      <section className='grid'>
        {filter.map((store) => {
          return (
            <GridCard
              key={store.id}
              store={store}
              tags={store.tags}
              open={store.openHour}
              close={store.closeHour}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Grid;
