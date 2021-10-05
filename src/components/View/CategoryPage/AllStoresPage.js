import React from 'react';
import GridCard from '../../Grid/GridCard';

const AllStoresPage = (props) => {
  return (
    <div className='grid__wrapper'>
      {props.stores.map((store) => {
        if (
          props.firstCategory === store.firstCategory[0] &&
          props.locationCategory === '전체'
        ) {
          return (
            <GridCard
              key={store.id}
              store={store}
              tags={store.tags}
              open={store.openHour}
              close={store.closeHour}
            ></GridCard>
          );
        } else if (
          store.eupmyeondongRi === props.locationCategory &&
          store.firstCategory[0] === props.firstCategory
        ) {
          return (
            <GridCard
              key={store.id}
              store={store}
              tags={store.tags}
              open={store.openHour}
              close={store.closeHour}
            ></GridCard>
          );
        } else return null;
      })}
    </div>
  );
};

export default AllStoresPage;
