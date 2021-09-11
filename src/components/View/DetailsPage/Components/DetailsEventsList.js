import React from 'react';

import { useGlobalContext } from '../../../context';

import './DetailsEventsList.css';

const DetailsEventsList = (props) => {
  const { loading, events } = useGlobalContext();

  return (
    <div className='EventsPage__Wrapper'>
      <section className='Details-EventsList'>
        <h3 style={{ marginTop: '1rem', fontSize: '1.4rem' }}>
          진행중인 이벤트
        </h3>
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
      </section>
    </div>
  );
};

export default DetailsEventsList;
