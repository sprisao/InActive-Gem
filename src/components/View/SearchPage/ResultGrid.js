import React from 'react';
import GridCard from '../../Grid/GridCard';
import '../../Grid/Grid.css';

const Grid = ({ filter }) => {
  console.log(filter);

  return (
    <section className='title'>
      <h3> 검색결과: </h3>
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
