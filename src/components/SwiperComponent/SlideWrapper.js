import React from 'react';
import { useGlobalContext } from '../context';
import SlideType1 from './SlideType1';
import SlideCard from './SlideCard';
import Loading from '../Loading';
import './SlideWrapper.css';

const SlideWrapper = (props) => {
  const { stores, lunchRCCMD, loading } = useGlobalContext();

  let slideType;
  if (props.slideType === 'type1') {
    if (props.view === 'LunchRCMMD') {
      slideType = (
        <div className='SlideWrapper'>
          {lunchRCCMD.map((store) => {
            if (props.condition === props.filter) {
              return <SlideType1 key={store.id} store={store}></SlideType1>;
            }
          })}
          ;
        </div>
      );
    }
  }

  if (loading) {
    return <Loading />;
  }
  return <section className='title'>{slideType}</section>;
};

export default SlideWrapper;
