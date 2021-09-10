import React from 'react';

import { useGlobalContext } from '../../../context';

import '../../EventsPage/EventsPage.css';

const DetailsEventsList = (props) => {
  const { loading, events } = useGlobalContext();

  return (
    <div className='EventsPage__Wrapper'>
      <div className='EventsWrapper'>
        {events.map((item) => {
          if (item.id === props.eventItems[0])
            return (
              // <Link to={`/store/${item.stores[0]}`} className=''>
              <div className='EventsCard' key={item.id}>
                <img src={item.image[0].url} alt='' />
              </div>
              // </Link>
            );
        })}
      </div>
    </div>
  );
};

export default DetailsEventsList;
